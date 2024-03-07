import React from "react";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className="bg-white lg:w-2/3 px-5 py-2 lg:px-6 lg:py-5 mt-5 rounded-lg">
      <h1 className="text-[#0F1629] text-2xl font-semibold leading-[28.8px]">
        Tokenomics
      </h1>

      <div className="flex flex-col gap-5 mt-5">
        <h3 className="text-[#1D1D1D] text-xl font-semibold leading-9">
          Initial Distribution
        </h3>

        <div className="flex gap-5 items-center">
          <Image
            src="/tokenomics-img.png"
            alt="image"
            height={179}
            width={179}
            className="h-auto"
          ></Image>
          <Image
            src="/tokenomics-img2.png"
            alt="image"
            height={0}
            width={200}
            className="h-auto hidden lg:flex"
          ></Image>
        </div>

        <p className="text-[#3E424A] text-base font-medium leading-[25.6px] mb-10">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
