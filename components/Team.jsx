import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-white lg:w-2/3 px-5 lg:pl-6 lg:pr-10 py-5 mt-5 rounded-lg">
      <h1 className="text-[#0F1629] text-2xl font-semibold">Team</h1>
      <p className="text-[#3E424A] font-medium text-base mt-5">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="flex flex-col gap-6 mt-7 mb-5">
        <div className="bg-[#E8F4FD] flex flex-col lg:flex-row gap-4 py-3 px-3 rounded-lg items-center">
          <Image
            src="/team-user1.png"
            alt="image"
            height={130}
            width={130}
            className="h-auto"
          ></Image>
          <p className="text-[#0F1629] text-sm leading-[22.4px] font-light">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        <div className="bg-[#E8F4FD] flex flex-col lg:flex-row gap-4 py-3 px-3 rounded-lg items-center">
          <Image
            src="/team-user2.png"
            alt="image"
            height={130}
            width={130}
            className="h-auto"
          ></Image>
          <p className="text-[#0F1629] text-sm leading-[22.4px] font-light">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>

        <div className="bg-[#E8F4FD] flex flex-col lg:flex-row gap-4 py-3 px-3 rounded-lg items-center">
          <Image
            src="/team-user3.png"
            alt="image"
            height={130}
            width={130}
            className="h-auto"
          ></Image>
          <p className="text-[#0F1629] text-sm leading-[22.4px] font-light">
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
