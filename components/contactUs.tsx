import React from "react";
import Image from "next/image";

// images
import Arrow from "./../public/assets/images/arrow.png";

function ContactUs() {
  return (
    <div className="bg-black text-white pt-[60px] pb-[40px]">
      <div className="flex justify-center flex-wrap">
        <div className="w-full text-center lg:text-start lg:w-2/12">
          <p className="text-[36px] leading-[43px] pt-[10px] font-semibold">
            Join Waitlist
          </p>
        </div>

        <div className="sm:w-2/3 lg:w-5/12 lg:pl-[20px] pt-5 lg:pt-[7px]">
          <div className="w-[300px] sm:w-[79%] mx-auto lg:ml-0">
            <div className="rounded-[15px] p-[5px] flex border border-white text-black bg-transparent items-center mb-[10px] mt-[3]">
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
            <p className="pl-[10px] pt-[5px] text-[12px] leading-[14px]">
              Subscribe to join waitlist and also get access to the latest news
              and drops
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
