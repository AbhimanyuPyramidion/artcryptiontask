import React from "react";
import Image from "next/image";
import { imageData } from "../data/imageData";
import SocialMedia from "./socialMedia";

function WhyArtcryption() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto text-black">
        <div className="w-10/12 mx-auto">
          <h2 className="pt-[80px] pb-[20px] text-[38px] leading-[46px] font-bold">
            Why Artcryption?
          </h2>
          <p className="pt-[20px] pb-[40px] text-[34px] leading-[36px] font-medium">
            Sell, protect and share your NFTs, creative assets & IP online
          </p>
          <div className="flex flex-wrap">
            {imageData?.map((image) => {
              return (
                <>
                  <div className="w-full lg:w-1/2" key={image.id}>
                    <div className="w-[80%] px-0 lg:px-[25px] p-[25px] text-[22px] leading-[1] flex">
                      <figure className="mr-[20px] min-w-[35px]">
                        <Image
                          src={image.image}
                          width={35}
                          height={35}
                          alt="UK flag"
                        />
                      </figure>
                      <p>{image.content}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <SocialMedia />
        </div>
      </div>
    </>
  );
}

export default WhyArtcryption;
