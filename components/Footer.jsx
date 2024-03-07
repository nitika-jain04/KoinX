"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import getTrendingCoins from "@/utils";
import Image from "next/image";

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const { trendingCoins: coins } = await getTrendingCoins();
        setTrendingCoins(coins);
        // console.log(trendingCoins);
        // console.log(coins);
      } catch (err) {
        console.error(err);
        setTrendingCoins([]);
      }
    };

    fetchTrendingCoins();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white mt-10 px-5 lg:px-16 py-8">
      <div>
        <h2 className="text=[#202020] text-2xl font-semibold leading-9">
          You May also like
        </h2>

        <div className="flex overflow-x-auto gap-3 mt-4">
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="flex flex-col gap-2 border border-[#E3E3E3] rounded-[10px] pt-3 pl-5 pr-3 min-w-[252px] mt-3"
            >
              <div className="flex items-center gap-2">
                {/* <Image src="" alt="image"></Image> */}
                <h4 className="text-base">{coin.item.symbol}</h4>
                <h4
                  className={`p-1 flex items-center gap-2 text-xs font-medium max-w-lg ${
                    coin.item.data.price_change_percentage_24h.usd < 0
                      ? "text-[#E96975] bg-[#EE6855] bg-opacity-10"
                      : "bg-[#EBF9F4] text-[#14B079]"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </h4>
              </div>

              <h3 className="text-lg font-medium text-[#171717] leading-6 max-w-2xl">
                {coin.item.data.price}
              </h3>

              <Image
                src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`}
                alt="Sparkline"
                width={400}
                height={180}
                className="px-8 pb-2 pr-10 mt-2 text-[#0AB27D]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text=[#202020] text-2xl font-semibold leading-9">
          Trending Coins
        </h2>

        <div className="flex overflow-x-auto gap-3 mt-5 mb-16">
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="flex flex-col gap-2 border border-[#E3E3E3] rounded-[10px] pt-3 pl-5 pr-3 min-w-[252px] mt-3 slider-container"
            >
              <div className="flex items-center gap-2">
                {/* <Image src="" alt="image"></Image> */}
                <h4 className="text-base">{coin.item.symbol}</h4>
                <h4
                  className={`p-1 flex items-center gap-2 text-xs font-medium max-w-lg ${
                    coin.item.data.price_change_percentage_24h.usd < 0
                      ? "text-[#E96975] bg-[#EE6855] bg-opacity-10"
                      : "bg-[#EBF9F4] text-[#14B079]"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </h4>
              </div>

              <h3 className="text-lg font-medium text-[#171717] leading-6 max-w-2xl">
                {coin.item.data.price}
              </h3>

              <Image
                src={`https://www.coingecko.com/coins/${coin.item.coin_id}/sparkline.svg`}
                alt="Sparkline"
                width={400}
                height={180}
                className="px-8 pb-2 pr-10 mt-2 text-[#0AB27D]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
