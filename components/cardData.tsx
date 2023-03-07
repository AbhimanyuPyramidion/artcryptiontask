import React from "react";
import Image from "next/image";

function CardData({ id, image, title, by, from }: any) {
  return (
    <div
      className="px-[10px] text-black py-[20px] lg:py-0 w-full sm:w-1/2 lg:w-1/4"
      key={id}
    >
      <div className="w-[250px] mx-auto lg:w-full card-shadow xl:h-[340px] rounded-[15px] p-[16px] pb-[24px]">
        <Image
          className="w-[220px] h-[220px] max-h-full max-w-full object-cover mx-auto"
          src={image}
          width={220}
          height={220}
          alt="UK flag"
        />
        <div className="pl-[8px] pt-[3px] pr-[10px]">
          <p
            className="pt-[10px] text-[20px] leading-[20px]"
            title="Desert Session 2021"
          >
            {title}
          </p>
          <p className="text-[#707070] pt-[3px] text-[14px] leading-[16px]">
            {by}
          </p>
          <div className="flex justify-between lg:flex-col items-start xl:flex-row">
            <p className="text-[#ba7e86] text-[18px] leading-[20px] pt-[10px] font-bold">
              {from}
            </p>
            <button className="leading-[20px] lg:mt-3 xl:mt-0 text-[16px] pb-[10px] pt-[8px] px-[25px] border-0 bg-[#6f6f6f] rounded-[22px] text-white">
              Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardData;
