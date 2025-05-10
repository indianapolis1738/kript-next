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
        const apiUrl = process.env.BASE_URL || "https://livematter23.kript.africa/markets/ticker?currency_pair=usdtngn"; // Replace with your default URL
        if (!apiUrl) {
          throw new Error("API URL is not defined");
        }
        const res = await axios.get(
          apiUrl,
          { headers: { 'Cache-Control': 'no-cache' } }
        );

        const responseData = res.data?.data?.data;

        if (responseData) {
          setMarket({ ...responseData }); // trigger re-render
          setError("");
          console.log(res.data);
        } else {
          setError("Unable to fetch data");
        }

        console.log("Fetched at", new Date().toLocaleTimeString(), responseData);

      } catch (error) {
        setError("Unknown error");
        // console.error("Fetch error:", error);
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

