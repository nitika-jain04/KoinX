import React from "react";
import Image from "next/image";

const Sentiment = () => {
  return (
    <div className="bg-white lg:w-2/3 px-5 lg:pl-6 lg:pr-10 py-5 mt-5 rounded-lg">
      <h1 className="text-[#0F1629] font-semibold text-2xl">Sentiment</h1>

      <div className="flex gap-1 items-center mt-5">
        <h2 className="text-[#44475B] text-[18.91px] font-semibold leading-5">
          Key Events
        </h2>
        <svg
          className="-mt-1"
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

      <div className="mt-5 flex gap-5">
        <Image
          src="/sentiment-img2.png"
          alt="image"
          height={200}
          width={400}
          className="w-auto h-[200px] object-contain"
        ></Image>
        <Image
          src="/sentiment-img3.png"
          alt="image"
          height={200}
          width={265}
          className="w-auto h-[200px] object-contain hidden lg:flex"
        ></Image>
      </div>

      <div className="flex gap-1 mt-5">
        <h2 className="text-[#44475B] text-[18.91px] font-semibold leading-5">
          Analyst Estimates
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

      <div className="mt-5 flex gap-10 mb-10">
        <Image
          src="/sentiment-number.png"
          alt="image"
          height={115}
          width={115}
          className="h-auto"
        ></Image>
        <Image
          src="/sentiment-data.png"
          alt="image"
          height={300}
          width={550}
          className="w-[550px] object-contain hidden lg:flex"
        ></Image>
      </div>
    </div>
  );
};

export default Sentiment;
