import React from "react";
import Image from "next/image";
import Arrow from "./../public/assets/images/arrow.png";

function Welcome() {
  return (
    <>
      <div className="max-[1300px]:h-full h-[1440px] bg-[url('./../public/assets/images/banner.png')] bg-cover bg-center">
        <div className="max-[800px]:pr-[10px] max-[800px]:pt-[20px] flex pr-[90px] text-white pt-[20px] items-center font-semibold justify-end font-kern text-[37px] leading-[44px]">
          <p className="text-white max-[650px]:text-[24px]">Enter</p>
          <figure>
            <Image
              className="max-[650px]:pt-[5px] pt-[10px] ml-[10px]"
              src={Arrow}
              width={29}
              height={29}
              alt="UK flag"
            />
          </figure>
        </div>
        <h1 className="max-[650px]:text-[50px] max-[800px]:pt-[59px] max-[800px]:text-center max-[800px]:pl-0 text-[74px] pl-[100px] pt-[19px] font-bold leading-[66px] font-haffer text-white">
          artcryption
        </h1>
        <p className="max-[650px]:text-[28px] text-[38px] max-[800px]:pt-[30px] max-[800px]:text-center max-[1300px]:text-end max-[1300px]:pr-[10px] max-[1300px]:pt-[30px] max-[1300px]:pl-0 pl-[875px] pt-[490px] text-center font-medium leading-[44px] font-kern text-white">
          nft dropping soon
        </p>
        <div className=" max-[800px]:pl-[10px]  max-[800px]:pt-[20px]  max-[800px]:text-center pl-[100px] pt-[150px]">
          <p className="text-white text-[23.6px] relative leading-[30px] font-kern max-[800px]:before:mx-auto before:content-[''] before:mb-[20px] before:border-t before:border-white before:w-[10%] before:block">
            Vitamin D,
            <br /> by AIMSIR Studio
          </p>
          <p className="pt-[20px] font-kern text-[18.5px] leading-[30px] text-white">
            curated by Bompas & Parr & <br /> MA Creative & Louisa St. Pierre
          </p>
        </div>
        <div className="w-11/12 max-[650px]:mx-auto">
          <div className="max-[650px]:w-[80%] max-[1300px]:pb-10 max-[650px]:text-center max-[650px]:mx-auto w-[30%] mr-0 ml-auto">
            <p className="pt-[250px] pb-[10px] font-kern text-[23.6px] leading-[30px] text-white">
              Join Waitlist
            </p>
            <div className="rounded-[10px] p-[5px] flex border border-white w-full text-black bg-transparent items-center">
              <input
                className="ml-[8px] pt-[6px] pb-[8px] h-[32px] text-[1rem] text-white w-full bg-transparent outline-none"
                type="text"
                placeholder="Enter your email"
              />
              <button className="p-[5px] text-[1.5rem]">
                <Image
                  className=""
                  src={Arrow}
                  width={24}
                  height={24}
                  alt="UK flag"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
