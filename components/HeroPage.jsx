"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import Sentiment from "./Sentiment";
import getTrendingCoins from "@/utils";
import getMainCoin from "@/utils2";
import { currencyFormatter } from "../utils";
import Tabs from "./Tabs";
import Performance from "./Performance";

const HeroPage = () => {
  const container = useRef();
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [mainCoin, setMainCoin] = useState({});

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const { trendingCoins: coins } = await getTrendingCoins();
        setTrendingCoins(coins.slice(0, 3));
        // console.log(trendingCoins);
        // console.log(coins);
      } catch (err) {
        console.error(err);
        setTrendingCoins([]);
      }
    };

    fetchTrendingCoins();
  }, []);

  useEffect(() => {
    const fetchMainCoin = async () => {
      try {
        const { bitcoin } = await getMainCoin();
        setMainCoin(bitcoin);
        // console.log(bitcoin);
      } catch (err) {
        console.error(err);
        setMainCoin({});
      }
    };

    fetchMainCoin();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "820",
          "height": "510",
          "symbol": "NASDAQ:AAPL",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <div className="pl-5 pr-5 mb-20 lg:px-14">
      <div className="flex gap-1 text-sm my-4 items-center">
        <h3 className="text-[#3E5765]">Cryptocurrencies</h3>

        <Image
          src="/image.png"
          alt="image"
          height={10}
          width={10}
          className="ml-2 h-auto"
        ></Image>

        <h3 className="text-[#0F1629]">Bitcoin</h3>
      </div>

      <div className="flex gap-5">
        <div className="w-full lg:w-2/3 bg-white rounded-lg px-6 py-8">
          <div className="flex items-center gap-2">
            <Image
              src="/bitcoin.png"
              alt="image"
              height={40}
              width={40}
            ></Image>
            <h1 className="text-[#0B1426] text-2xl font-semibold leading-[28.8px]">
              Bitcoin
            </h1>
            <h3 className="text-[#5D667B] text-base font-semibold">BTC</h3>

            <h3 className="text-[#FFFFFF] bg-[#768396] rounded-lg text-base font-light ml-5 px-3 py-2">
              Rank #1
            </h3>
          </div>

          <div className="mt-8 flex gap-10 items-center">
            <h2 className="text-[28px] text-[#0B1426] font-medium">
              ${currencyFormatter.format(mainCoin.usd)}
            </h2>

            <div className="flex gap-3 items-center">
              <h3 className="text-[#14B079] bg-[#EBF9F4] p-1 flex items-center gap-2 text-base font-medium max-w-lg">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
                </svg>
                {mainCoin && mainCoin.usd_24h_change !== undefined
                  ? mainCoin.usd_24h_change.toFixed(2) + "%"
                  : "N/A"}
              </h3>

              <h4 className="text-[#768396] font-normal text-sm">(24H)</h4>
            </div>
          </div>

          <h2 className="text-base font-normal text-[#0B1426] tracking-wide">
            ₹{currencyFormatter.format(mainCoin.inr)}
          </h2>

          <hr
            width="h-px bg-[#C9CFDD] border-0"
            className="text-[#C9CFDD] mt-6"
          />

          <div className="flex justify-between items-center mt-5">
            <h2 className="text-[#0B1426] text-base font-medium">
              Bitcoin Price Chart (USD)
            </h2>
            <div className="flex gap-6 items-center text-[#5D667B] text-[13px] font-normal">
              <h3>1H</h3>
              <h3>24H</h3>
              <h3 className="text-[#0141CF] bg-[#E2ECFE] px-3 -mx-2 rounded-[32px]">
                7D
              </h3>
              <h3>1M</h3>
              <h3>3M</h3>
              <h3>6M</h3>
              <h3>ALL</h3>
            </div>{" "}
          </div>

          <div className="mt-10 flex w-auto h-auto">
            <div className="tradingview-widget-container" ref={container}>
              <div className="tradingview-widget-container__widget"></div>
            </div>
          </div>
        </div>

        <div className="w-1/3 lg:flex flex-col items-center gap-5 hidden">
          <Image
            src="/hero-rightimg.png"
            alt="image"
            height={400}
            width={410}
          ></Image>

          <div className="bg-white p-5 rounded-lg w-full">
            <h2 className="text-[#0F1629] text-2xl font-semibold">
              Trending Coins (24h)
            </h2>

            <div className="flex flex-col gap-3 mt-5">
              {trendingCoins
                .filter((coin) => {
                  const price = coin.item.data.price;
                  return !/$0.0<sub title="0.000003982">5<\sub>/.test(price);
                })
                .map((coin) => (
                  <div key={coin.item.id} className="flex gap-2">
                    <div className="flex w-full items-center justify-between">
                      <h3 className="text-base">
                        {coin.item.name} ({coin.item.symbol})
                      </h3>
                      <h3 className="text-[#14B079] bg-[#EBF9F4] p-1 flex items-center gap-2 text-base font-medium max-w-lg">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
                        </svg>
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* <Tabs /> */}

      <Performance />

      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </div>
  );
};

export default HeroPage;
