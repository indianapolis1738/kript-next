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
        const res = await axios.get("https://black-pearl-kripttechnology.koyeb.app/markets/tickers", { headers: { 'Cache-Control': 'no-cache' } });
        // console.log("Fetched at", new Date().toLocaleTimeString(), res.data.data.data);
        setMarket(res.data.data.data);
      } catch {
        setError("Failed to load market data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
        fetchData();
      }, 15000); // refetch every 15 seconds
  
      return () => clearInterval(interval);
  }, []);

  return { market, loading, error };
};
