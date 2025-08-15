import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const TopNavbar = () => {
  return <div className="w-full py-4 px-12 bg-primary  text-white">
    <div className="flex items-center justify-between ">
         <div className="flex space-x-6">
          <span className="flex items-center gap-2 text-sm font-normal"> <Image src={assets.phone} alt="phone_icon"/> 0208 543 9126</span>
          <span className="flex items-center gap-2 pl-4 border-l border-gray-300 text-sm font-normal"><Image src={assets.mail} alt="mai_icon"/> info@msaccountants.co.uk</span>
          <span className="flex items-center gap-2 pl-4  border-l border-gray-300 text-sm font-normal"><Image src={assets.location} alt="location_icon"/> Bank House, 209 Merton Road, London, SW19 1EE</span>
        </div>
        <div className="flex space-x-4">
          <Image src={assets.fb} alt="fb_icon"/>
          <Image src={assets.twitter} alt="twitter_icon"/>
          <Image src={assets.youtube} alt="youtube_icon"/>
          <Image src={assets.linkedin} alt="linkedin_icon"/>
        </div>
    </div>
  </div>
};

export default TopNavbar;
