"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CursorContext } from "../CursorContext";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
// components
import MobileNav from "../MobileNav";
import Nav from "../Nav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header
      className="font-primary pb-6 xl:pb-12.5 z-40 w-full bg-accent-100
      xl:bg-transparent"
    >
      {/* Topbar */}
      <div className="bg-[#cea39c] mb-6 xl:mb-12.5 py-4 xl:py-8">Topbar</div>
      {/* Logo */}
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <Image
            src="/header/transLogo.png"
            alt="Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Mobile nav trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>

        {/* Mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-75 xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;

// cea39c
