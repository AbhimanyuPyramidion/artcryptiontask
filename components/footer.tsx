import React from "react";
import Image from "next/image";

// images
import Artcryption from "../public/assets/images/artcryption.png";
import Twitter from "../public/assets/images/twitter.svg";
import Facebook from "../public/assets/images/facebook.svg";
import Instagram from "../public/assets/images/instagram.svg";

function Footer() {
  return (
    <>
      <footer className="bg-[#dcdce0] text-black">
        <div className="max-w-[1440px] relative mx-auto">
          <h2 className="text-[45px] sm:text-[60px] lg:text-[110px] font-haffer font-bold pb-[20px] pl-[20px] lg:pl-[40px] leading-[normal]">
            artcryption
          </h2>
          <figure>
            <Image
              className="absolute top-[90px] -right-[10px] sm:top-0 sm:right-[50px]"
              src={Artcryption}
              width={117}
              height={121}
              alt="UK flag"
            />
          </figure>
          <div className="flex flex-wrap pb-[20px] lg:pb-0">
            <div className="w-full lg:w-4/12 xl:w-1/2">
              <p className="w-[66.66%] lg:w-full text-[16px] leading-[22px] pt-[20px] pl-[20px] lg:pl-[40px]">
                Artcryption is a platform for creators to share, protect and
                sell their works showcasing the best in creativity.
              </p>
            </div>
            <div className="w-full py-6 lg:py-0 lg:w-3/12 xl:w-1/6">
              <ul className="text-[16px] leading-[16px] pl-[20px] lg:pl-[90px]">
                <li className="pb-[20px]">Drops</li>
                <li className="pb-[20px]">About</li>
                <li className="pb-[20px]">How It works</li>
                <li className="pb-[20px]">Curators</li>
                <li className="pb-[20px]">Feed</li>
              </ul>
            </div>
            <div className="w-[80%] lg:w-5/12 pl-[20px] lg:pl-[40px] xl:w-4/12">
              <p className="-mt-[20px] text-[16px] leading-[26px] pb-0 lg:pb-[20px] font-semibold">
                Newsletter
              </p>
              <p className="w-[80%] text-[14px] text-[#6f6f6f] leading-[22px] pb-1 lg:pb-[35px]">
                Subscribe to join the waitlist and get latest news, drops and
                events.
              </p>
              <div className="flex justify-between flex-wrap sm:flex-nowrap">
                <div className="w-full">
                  <input
                    className="p-[4px] pl-[12px] py-[8px] border border-black w-full rounded-[10px] text-black outline-none bg-transparent"
                    type="text"
                  />
                </div>
                <div className="mt-2 sm:mt-0 sm:pl-[20px] pr-[10px]">
                  <button className="uppercase bg-black text-white h-[42px] min-w-[110px] w-full xl:w-[128px] text-[16px] leading-[28px] rounded-[10px] font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap p-[10px] bg-[#f5f5f5]">
          <div className="flex w-full lg:w-4/12 justify-center lg:justify-start">
            <figure className="ml-[10px]">
              <Image src={Twitter} width={17} height={17} alt="UK flag" />
            </figure>
            <figure className="ml-[10px]">
              <Image src={Facebook} width={17} height={17} alt="UK flag" />
            </figure>
            <figure className="ml-[10px]">
              <Image src={Instagram} width={17} height={17} alt="UK flag" />
            </figure>
          </div>
          <p className="lg:w-5/12 py-6 lg:py-0 text-center lg:text-start w-full text-[12px] text-black leading-[14px] lg:pl-[50px] tracking-[1.44px]">
            © Artcryption Inc. 2021, All Rights Reserved
          </p>
          <ul className="lg:w-3/12 w-full px-[10px] flex justify-between items-center text-[12px] text-right uppercase">
            <li>press</li>
            <li>privacy</li>
            <li>terms</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
