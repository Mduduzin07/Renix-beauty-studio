"use client";

import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MobileNavProps = {
  setMobileNav: (value: boolean) => void;
};

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <nav className="text-accent-100">
      <div className="cursor-pointer" onClick={() => setMobileNav(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
