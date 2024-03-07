import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-4 bg-white lg:w-2/3 px-5 py-2 lg:px-6 lg:py-5 mt-5 rounded-lg">
      <h1 className="text-[#0F1629] text-2xl font-semibold">About Bitcoin</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-[#0B1426] text-lg font-bold tracking-tight">
          What is Bitcoin?
        </h2>
        <p className="text-[#3E424A] text-base font-medium leading-[25.6px]">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>

      <hr width="h-px bg-[#C9CFDD] border-0" className="text-[#C9CFDD]" />

      <div className="flex flex-col gap-2">
        <h2 className="text-[#0B1426] text-lg font-bold tracking-tight">
          Lorem ipsum dolor sit amet
        </h2>
        <p className="text-[#3E424A] text-base font-medium leading-[25.6px]">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus.<br></br>
          <br></br>
          Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam
          praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.<br></br>
          <br></br> Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
          aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <hr width="h-px bg-[#C9CFDD] border-0" className="text-[#C9CFDD]" />

      <h1 className="text-[#0F1629] text-[24px] font-semibold">
        Already Holding Bitcoin?
      </h1>

      <div>
        <div className="flex flex-col lg:flex-row gap-5">
          <Image
            src="/about-img1.png"
            alt="image"
            height={250}
            width={300}
            className="lg:w-1/2 w-[350px]"
          ></Image>
          <Image
            src="/about-img2.png"
            alt="image"
            height={250}
            width={300}
            className="lg:w-1/2 w-[350px]"
          ></Image>
        </div>
      </div>

      <hr width="h-px bg-[#C9CFDD] border-0" className="text-[#C9CFDD]" />

      <p className="text-[#3E424A] text-base font-medium leading-[25.6px] mb-5">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default About;
