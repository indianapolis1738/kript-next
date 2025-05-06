// src/app/markets/page.tsx
"use client";

import React, { useState } from "react";
import { useMarkets } from "@/hooks/fetchmarkets";
import Link from "next/link";
import { useTrending } from "@/hooks/fetchtrending";


const Page = () => {

    //for market datas and search query
    const { market, loading, error } = useMarkets();
    const [searchQuery, setSearchQuery] = useState("");

    //for trending assets
    const { trending } = useTrending()



    if (loading) return <p className="max-w-6xl mx-auto text-center">Loading...</p>;
    if (error) return <p className="max-w-6xl mx-auto text-center">{error}</p>;

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="">
                <h1 className="justify-center items-center text-black font-poppins font-semibold text-[25px] md:text-[28px] lg:text-[60px] leading-[48px] md:leading-[100px]">
                    Market
                </h1>
                <p className="text-[14px] md:text-[20px] text-[#626C70]">
                    Get the latest Market update here on Kript
                </p>
            </div>

            <div className="hidden md:block w-full bg-linear-to-r from-[#bfd0f5] to-[#DFEFFE] p-4 mt-10 rounded-2xl">
                <p className="text-[#626C70]">Trending assets</p>

                <div className="flex flex-row gap-6 justify-between items-center mt-10" >
                    {trending &&
                        Object.entries(trending).slice(0, 5).map(([symbol, { ticker }]) => {
                            return (
                                <div key={symbol}
                                    className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 w-6/12 flex flex-col gap-6"
                                >
                                    <p className="text-sm font-semibold">{symbol.replace("usdt", "").toUpperCase()}</p>
                                    <p className="text-xs text-gray-600">${parseFloat(ticker.last).toFixed(4)}</p>

                                </div>
                            );
                        })}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-10 gap-4 p-2 md:gap-20">
                {/* <div className="flex flex-row justify-start gap-6 items-center w-full md:w-1/2">
                    <p className="p-1.5 md:p-2 bg-[#F0F2F9] rounded-[10px]">Popular</p>
                    <p className="p-1.5 md:p-2 bg-[#F0F2F9] rounded-[10px]">Gainers</p>
                    <p className="p-1.5 md:p-2 bg-[#F0F2F9] rounded-[10px]">Losers</p>
                </div> */}
                <div className="flex justify-between items-center flex-row w-full md:w-1/3 border border-[#626C70] transition-all duration-200 focus-within:border-[#1C274C] focus-within:shadow-md focus-within:border-[2px] p-2 rounded-[6px] md:ml-auto">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16699 0.666016C4.02486 0.666016 0.666992 4.02388 0.666992 8.16602C0.666992 12.3082 4.02486 15.666 8.16699 15.666C9.93784 15.666 11.5653 15.0523 12.8484 14.0259L15.9111 17.0886C16.2365 17.414 16.7641 17.414 17.0896 17.0886C17.415 16.7632 17.415 16.2355 17.0896 15.9101L14.0269 12.8474C15.0533 11.5644 15.667 9.93686 15.667 8.16602C15.667 4.02388 12.3091 0.666016 8.16699 0.666016ZM2.33366 8.16602C2.33366 4.94435 4.94533 2.33268 8.16699 2.33268C11.3887 2.33268 14.0003 4.94435 14.0003 8.16602C14.0003 11.3877 11.3887 13.9993 8.16699 13.9993C4.94533 13.9993 2.33366 11.3877 2.33366 8.16602Z" fill="#667185" />
                    </svg>
                    <input type="search" name="search" id="search-coin" className="w-[85%] border-none focus:outline-none focus:ring-0" placeholder="Search pair"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                    />
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.35891 6.47406C7.11483 6.22998 6.7191 6.22998 6.47503 6.47406C6.23095 6.71814 6.23095 7.11387 6.47503 7.35794L8.11643 8.99935L6.47504 10.6407C6.23097 10.8848 6.23097 11.2805 6.47504 11.5246C6.71912 11.7687 7.11485 11.7687 7.35893 11.5246L9.00031 9.88323L10.6417 11.5246C10.8858 11.7687 11.2815 11.7687 11.5256 11.5246C11.7696 11.2805 11.7696 10.8848 11.5256 10.6407L9.88419 8.99935L11.5256 7.35796C11.7697 7.11388 11.7697 6.71816 11.5256 6.47408C11.2815 6.23 10.8858 6.23 10.6417 6.47408L9.00031 8.11546L7.35891 6.47406Z" fill="#1C274C" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00033 0.0410156C4.05278 0.0410156 0.0419922 4.0518 0.0419922 8.99935C0.0419922 13.9469 4.05278 17.9577 9.00033 17.9577C13.9479 17.9577 17.9587 13.9469 17.9587 8.99935C17.9587 4.0518 13.9479 0.0410156 9.00033 0.0410156ZM1.29199 8.99935C1.29199 4.74215 4.74313 1.29102 9.00033 1.29102C13.2575 1.29102 16.7087 4.74215 16.7087 8.99935C16.7087 13.2565 13.2575 16.7077 9.00033 16.7077C4.74313 16.7077 1.29199 13.2565 1.29199 8.99935Z" fill="#1C274C" />
                    </svg>
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
                    <tbody className="text-[#1D2939] divide-y divide-[#E4E7EC]">
                        {market && Object.entries(market)
                            .filter(([symbol]) => symbol.includes("usdt"))
                            .filter(([symbol]) =>
                                symbol.toLowerCase().includes(searchQuery)
                            )
                            .length > 0 ? (
                            Object.entries(market)
                                .filter(([symbol]) => symbol.includes("usdt"))
                                .filter(([symbol]) =>
                                    symbol.toLowerCase().includes(searchQuery)
                                )
                                .map(([symbol, { ticker }]) => {
                                    const open = parseFloat(ticker.open);
                                    const last = parseFloat(ticker.last);
                                    const difference = (last - open).toFixed(2);
                                    const isPositive = parseFloat(difference) > 0;

                                    return (
                                        <tr key={symbol} className="hover:bg-[#F9FAFB] transition-all">
                                            <td className="px-2 py-3 md:px-6 md:py-4 font-medium">{symbol.replace("usdt", "").toUpperCase()}</td>
                                            <td className="px-2 py-3 md:px-6 md:py-4">${last}</td>
                                            <td
                                                className={`px-2 py-3 md:px-6 md:py-4 font-semibold ${isPositive ? "text-green-600" : "text-red-500"}`}
                                            >
                                                {isPositive ? `+${difference}` : difference}
                                            </td>
                                            <td className="px-2 py-3 md:px-6 md:py-4">
                                                <Link
                                                    href="https://onelink.to/ff9jys"
                                                    className="px-4 py-2 bg-[#003399] hover:bg-[#002080] text-white rounded-md text-xs md:text-sm"
                                                >
                                                    Trade
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center px-6 py-4">
                                    No matching pairs.
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Page;
