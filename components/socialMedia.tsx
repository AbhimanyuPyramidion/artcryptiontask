import React from "react";
import { socialMediadata } from "../data/socialMedia";

function SocialMedia() {
  return (
    <div className="pt-[38px] pb-[19px]">
      <p>Join Our Community</p>
      <div>
        {socialMediadata?.map((social) => {
          return (
            <>
              <button
                className="my-[10px] mr-[10px] p-[7px] px-[12px] text-[14px] leading-[24px] rounded-[20px] border border-black"
                key={`${social.id}-${social.name}`}
              >
                {social.name}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SocialMedia;
