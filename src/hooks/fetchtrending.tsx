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

export const useTrending = () => {
  const [trending, setTrending] = useState<MarketData | null>(null);
  const [pending, setPending] = useState(true);
  const [err, setErr] = useState("");
  const [topSymbols, setTopSymbols] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://black-pearl-kripttechnology.koyeb.app/markets/tickers", { headers: { 'Cache-Control': 'no-cache' } });
        console.log("Fetched at", new Date().toLocaleTimeString(), res.data.data.data);
        const marketData: MarketData = res.data.data.data;
        // console.log("Fetched at", new Date().toLocaleTimeString(), res.data.data.data);
        setTrending(marketData);

        // Sort by volume in descending order and get the top 5 symbols
        const sortedSymbols = Object.entries(marketData)
          .sort((a, b) => parseFloat(b[1].ticker.vol) - parseFloat(a[1].ticker.vol))
          .slice(0, 5)
          .map((entry) => entry[0]);

        setTopSymbols(sortedSymbols);
      } catch {
        setErr("Failed to load market data");
      } finally {
        setPending(false);
      }
    };

    fetchData();

    const interval = setInterval(() => {
        fetchData();
      }, 30000); // refetch every 30 seconds
  
    return () => clearInterval(interval);
  }, []);

  return { trending, pending, err, topSymbols };
};
