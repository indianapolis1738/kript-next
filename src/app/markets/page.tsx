// src/app/markets/page.tsx
"use client";

import React, { useState } from "react";
import { useMarkets } from "@/hooks/fetchmarkets";
import Link from "next/link";

// Skeleton Loader Component
const MarketSkeleton = () => (

    <div className="p-4 max-w-7xl mx-auto animate-pulse">
        <div className="mb-6">
            <div className="h-10 w-1/3 bg-[#DFEFFE] rounded mb-2" />
            <div className="h-4 w-1/2 bg-[#DFEFFE] rounded" />
        </div>
        <div className="hidden md:block w-full bg-gradient-to-r from-[#bfd0f5] to-[#DFEFFE] p-4 mt-10 rounded-2xl mb-8">
            <div className="flex flex-row gap-6 justify-between items-center mt-10">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 w-6/12 flex flex-col gap-4">
                        <div className="h-4 w-1/2 bg-[#DFEFFE] rounded mb-2" />
                        <div className="h-3 w-1/3 bg-[#DFEFFE] rounded" />
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-10 gap-4 p-2 md:gap-20">
            <div className="flex justify-between items-center flex-row w-full md:w-1/3 border border-[#626C70] p-2 rounded-[6px] md:ml-auto">
                <div className="h-4 w-4 bg-[#DFEFFE] rounded mr-2" />
                <div className="h-4 w-3/4 bg-[#DFEFFE] rounded" />
                <div className="h-4 w-4 bg-[#DFEFFE] rounded ml-2" />
            </div>
        </div>
        <div className="w-full mt-5 md:mt-10">
            <table className="w-full table-auto border border-[#E4E7EC] rounded-2xl overflow-hidden text-start text-xs md:text-sm">
                <thead className="bg-[#F9FAFB] text-[#475467] text-left">
                    <tr>
                        <th className="px-2 py-3 md:px-6 md:py-4 font-medium">Coin</th>
                        <th className="px-2 py-3 md:px-6 md:py-4 font-medium">Price</th>
                        <th className="px-2 py-3 md:px-6 md:py-4 font-medium">Change</th>
                        <th className="px-2 py-3 md:px-6 md:py-4 font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(8)].map((_, i) => (
                        <tr key={i} className="hover:bg-[#F9FAFB] transition-all">
                            <td className="px-2 py-3 md:px-6 md:py-4">
                                <div className="h-4 w-16 bg-[#DFEFFE] rounded" />
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-4">
                                <div className="h-4 w-12 bg-[#DFEFFE] rounded" />
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-4">
                                <div className="h-4 w-10 bg-[#DFEFFE] rounded" />
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-4">
                                <div className="h-7 w-16 bg-[#003399] rounded" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);


//number of assets to display per page
const ITEMS_PER_PAGE = 10;

const Page = () => {
    const { market, loading, error } = useMarkets();
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);

    if (loading) return <MarketSkeleton />;
    if (error) return <p className="max-w-6xl mx-auto text-center">{error}</p>;

    const getCoinIconPath = (symbol: string) => {
        const coin = symbol.replace("usdt", "").replace("ngn", "").toLowerCase();
        return `/icons/${coin}.png`;
    };


    // Filter and slice data for pagination, filter out last price === 0
    const filteredMarkets = market
        ? Object.entries(market)
            .filter(([symbol]) => symbol.includes("usdt"))
            .filter(([, { ticker }]) => parseFloat(ticker.last) !== 0)
            .sort(([, { ticker: a }], [, { ticker: b }]) => parseFloat(b.last) - parseFloat(a.last))
            .filter(([symbol]) => symbol.toLowerCase().includes(searchQuery))
        : [];

    const totalPages = Math.ceil(filteredMarkets.length / ITEMS_PER_PAGE);
    const paginatedMarkets = filteredMarkets.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <div className="p-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-center font-poppins font-bold text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-[#003399] leading-tight">
                    Market Overview
                </h1>
                <p className="text-center text-[15px] md:text-[18px] text-[#626C70]">
                    Get the latest market updates and trends on Kript. Track your favorite coins and trade with ease.
                </p>
            </div>

            {/* Trending Assets */}
            <div className="hidden md:block w-full bg-gradient-to-r from-[#bfd0f5] to-[#DFEFFE] p-6 mt-10 rounded-2xl shadow mb-8">
                <p className="text-[#003399] font-semibold mb-4">Trending Assets</p>
                <div className="flex flex-row flex-wrap gap-4 justify-between items-center">
                    {market &&
                        Object.entries(market)
                            .slice(20, 25)
                            .map(([symbol, { ticker }]) => {
                                const iconPath = `/icons/${symbol.replace("usdt", "").replace("ngn", "").toLowerCase()}.png`;
                                return (
                                    <div
                                        key={symbol}
                                        className="bg-white p-4 rounded-xl shadow border border-[#DFEFFE] min-w-[150px] flex flex-col items-center"
                                    >
                                        <img
                                            src={iconPath}
                                            alt={`${symbol} icon`}
                                            className="w-8 h-8 mb-2 rounded-[100%] border border-[#DFEFFE]"
                                            onError={(e) => {
                                                e.currentTarget.src = "/yuan.png"; // fallback icon
                                            }}
                                        />
                                        <span className="text-base font-bold text-[#003399]">
                                            {symbol.replace("usdt", "").replace("ngn", "").toUpperCase()}
                                        </span>
                                        <span className="text-xs text-[#626C70]">
                                            ${parseFloat(ticker.last).toLocaleString()}
                                        </span>
                                    </div>
                                );
                            })}
                </div>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-10 gap-4 p-2 md:gap-20">
                <div className="flex items-center w-full md:w-1/3 border border-[#626C70] transition-all duration-200 focus-within:border-[#003399] focus-within:shadow-md focus-within:border-[2px] p-2 rounded-[6px] md:ml-auto bg-white">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.16699 0.666016C4.02486 0.666016 0.666992 4.02388 0.666992 8.16602C0.666992 12.3082 4.02486 15.666 8.16699 15.666C9.93784 15.666 11.5653 15.0523 12.8484 14.0259L15.9111 17.0886C16.2365 17.414 16.7641 17.414 17.0896 17.0886C17.415 16.7632 17.415 16.2355 17.0896 15.9101L14.0269 12.8474C15.0533 11.5644 15.667 9.93686 15.667 8.16602C15.667 4.02388 12.3091 0.666016 8.16699 0.666016ZM2.33366 8.16602C2.33366 4.94435 4.94533 2.33268 8.16699 2.33268C11.3887 2.33268 14.0003 4.94435 14.0003 8.16602C14.0003 11.3877 11.3887 13.9993 8.16699 13.9993C4.94533 13.9993 2.33366 11.3877 2.33366 8.16602Z"
                            fill="#667185"
                        />
                    </svg>
                    <input
                        type="search"
                        name="search"
                        id="search-coin"
                        className="w-full border-none focus:outline-none focus:ring-0 bg-transparent text-[#003399] placeholder-[#626C70]"
                        placeholder="Search pair"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    />
                </div>
            </div>

            {/* Market Table */}
            <div className="w-full mt-5 md:mt-10 overflow-x-auto">
                <table className="w-[98%] mx-auto mb-3 table-auto border border-[#536b95] rounded-2xl overflow-hidden text-start text-xs md:text-sm bg-white shadow">
                    <thead className="bg-[#F9FAFB] text-[#003399] text-left">
                        <tr>
                            <th className="px-2 py-3 md:px-6 md:py-4 font-semibold uppercase text-[15px] md:text-[20px]">Coin</th>
                            <th className="px-2 py-3 md:px-6 md:py-4 font-semibold uppercase text-[15px] md:text-[20px]">Price</th>
                            <th className="px-2 py-3 md:px-6 md:py-4 font-semibold hidden md:table-cell uppercase text-[15px] md:text-[20px]">Change</th>
                            <th className="px-2 py-3 md:px-6 md:py-4 font-semibold uppercase text-[15px] md:text-[20px]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#1D2939] divide-y divide-[#E4E7EC]">
                        {paginatedMarkets.length > 0 ? (
                            paginatedMarkets.map(([symbol, { ticker }]) => {
                                const open = parseFloat(ticker.open);
                                const last = parseFloat(ticker.last);
                                const difference = (last - open).toFixed(2);
                                const percentage = ((Number(difference) / Number(open)) * 100).toFixed(2);
                                const isPositive = parseFloat(difference) > 0;
                                const iconPath = getCoinIconPath(symbol);

                                return (
                                    <tr key={symbol} className="hover:bg-[#F0F6FF] transition-all">
                                        <td className="px-2 py-4 md:px-6 md:py-5 font-bold flex items-center justify-start gap-2">
                                            <div className="flex flex-row justify-center items-center gap-2 md:gap-4">
                                                <img
                                                    src={iconPath}
                                                    alt={`${symbol} icon`}
                                                    className="w-8 md:w-10 h-8 md:h-10 rounded-[100%] border border-[#DFEFFE]"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "/yuan.png"; // fallback icon
                                                    }}
                                                />
                                                <span className="uppercase text-[15px] md:text-[20px]">{symbol.replace("usdt", "").replace("ngn", "USDT")}</span>
                                            </div>
                                        </td>
                                        <td className="px-2 md:px-6 md:py-4 py-3 font-mono text-[15px] md:text-[18px]">
                                            ${last.toLocaleString()}
                                            <span className={`px-2 py-3 md:px-6 md:py-4 text-[10px] md:text-[18px] table-cell md:hidden ${isPositive ? "text-green-600" : "text-red-500"
                                                }`}>
                                                {isPositive ? `+${percentage}` : percentage}%
                                            </span>
                                        </td>
                                        <td
                                            className={`hidden md:table-cell px-2 py-3 md:px-6 md:py-4 text-[16px] md:text-[18px] ${isPositive ? "text-green-600" : "text-red-500"
                                                }`}
                                        >
                                            {isPositive ? `+${percentage}` : percentage}% <br />
                                            <span
                                                className={`text-[10px] hidden md:block ${isPositive ? "text-green-600" : "text-red-500"
                                                    }`}
                                            >
                                                {isPositive ? `+${difference}` : difference} USD
                                            </span>
                                        </td>
                                        <td className="px-2 py-0 md:px-6 md:py-4">
                                            <Link
                                                href="https://onelink.to/ff9jys"
                                                className="px-4 py-2 bg-[#003399] hover:bg-[#002080] text-white rounded-md text-[16px] md:text-[18px] font-semibold transition"
                                            >
                                                Trade
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-4">
                                    <p>
                                        Pair not found. Please try a different one.
                                    </p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8 mb-8">
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-3 py-1 rounded bg-[#DFEFFE] text-[#003399] font-semibold disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <span className="px-2 text-[#003399] font-semibold">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-3 py-1 rounded bg-[#DFEFFE] text-[#003399] font-semibold disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;
