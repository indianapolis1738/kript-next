// src/hooks/useMarkets.ts
import { useEffect, useState } from "react";
import axios from "axios";

type Ticker = {
  buy: string;
  high: string;
  last: string;
  low: string;
  open: string;
  sell: string;
  vol: string;
};

type MarketData = {
  [symbol: string]: {
    at: number;
    ticker: Ticker;
  };
};

export const useMarkets = () => {
  const [market, setMarket] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://black-pearl-kripttechnology.koyeb.app/markets/tickers",
          { headers: { 'Cache-Control': 'no-cache' } }
        );

        const responseData = res.data?.data?.data;

        if (responseData) {
          setMarket({ ...responseData }); // trigger re-render
          setError("");
        } else {
          setError("Unable to fetch data");
        }

        console.log("Fetched at", new Date().toLocaleTimeString(), responseData);

      } catch (error: any) {
        setError(error?.message || "Unknown error");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 20000);

    return () => clearInterval(interval);
  }, []);

  return { market, loading, error };
};

