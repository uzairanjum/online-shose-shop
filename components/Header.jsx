import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Icons from './Icons'
import MenuMobile from './MenuMobile'




export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex justify-between items-center z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className=" h-[60px] flex  justify-between items-center gap-4">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" />
        </Link>
        <Menu showCatMenu ={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && <MenuMobile showCatMenu ={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/>}

        <Icons mobileMenu ={mobileMenu} setMobileMenu={setMobileMenu} />


      </Wrapper>
    </header>
  );
}
