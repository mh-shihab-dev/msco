import Link from "next/link";
import MainNavbar from "./MainNavbar";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import { assets } from "@/assets/assets";
import FixedNavbar from "./FixedNavbar";

const Navbar = () => {
  return (
    <div className="w-[96%] max-w-[1600px] mx-auto">
      <div className="hidden lg:flex items-center gap-5 font-inter">
        {/* Nav Logo */}
        <Link href={"/"}>
          <Image src={assets.mscoDark} alt="fb_icon" />
        </Link>
        <div className="flex-1">
          <TopNavbar />
          <MainNavbar />
        </div>
      </div>
      <FixedNavbar />
    </div>
  );
};

export default Navbar;