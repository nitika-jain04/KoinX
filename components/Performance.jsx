import React, { useState, useEffect } from "react";
import getTrendingCoins from "@/utils";
import Image from "next/image";

const Performance = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const { trendingCoins: coins } = await getTrendingCoins();
        setTrendingCoins(coins.slice(0, 1));
        // console.log(coins);
      } catch (err) {
        console.error(err);
        setTrendingCoins([]);
      }
    };

    fetchTrendingCoins();
  }, []);
  return (
    <div className="mt-5 bg-white lg:w-2/3 rounded-lg px-5 lg:pl-6 lg:pr-10 py-5">
      <h2 className="text-[#0F1629] font-semibold text-2xl">Performance</h2>

      <Image
        src="/performance-img.png"
        alt="image"
        height={600}
        width={850}
        className="w-auto mt-10 h-auto"
      ></Image>

      <div className="flex gap-1 items-center mt-5">
        <h2 className="text-[#44475B] text-[18.91px] font-semibold leading-5">
          Fundamentals
        </h2>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.04 2.46362C5.44 2.46362 1.70667 6.19696 1.70667 10.797C1.70667 15.397 5.44 19.1303 10.04 19.1303C14.64 19.1303 18.3733 15.397 18.3733 10.797C18.3733 6.19696 14.64 2.46362 10.04 2.46362ZM10.8733 14.9636H9.20667V9.96362H10.8733V14.9636ZM10.8733 8.29696H9.20667V6.63029H10.8733V8.29696Z"
            fill="#ABB9BF"
          />
        </svg>
      </div>

      <div>
        {trendingCoins.map((coin) => (
          <div
            className="mt-5 flex flex-col lg:flex-row lg:gap-32"
            key={coin.item.id}
          >
            <div className="flex flex-col gap-3 lg:w-1/2">
              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Bitcoin Price
                </h3>
                <h3>{coin.item.data.price}</h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />
              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Trading Volume
                </h3>
                <h3>{coin.item.data.total_volume}</h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />
              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Market Cap Rank
                </h3>
                <h3>#{coin.item.market_cap_rank}</h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />
            </div>

            <div className="flex flex-col gap-3 lg:w-1/2">
              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Market Cap
                </h3>
                <h3>{coin.item.data.market_cap}</h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />

              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Market Volume
                </h3>
                <h3>
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(4)}
                </h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />

              <div className="flex justify-between">
                <h3 className="text-[#768396] text-sm font-medium">
                  Bitcoin Price
                </h3>
                <h3>{coin.item.price_btc.toFixed(6)}</h3>
              </div>
              <hr style={{ height: "2px", borderColor: "#C9CFDD" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
