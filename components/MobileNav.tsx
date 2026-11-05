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
    <nav className="text-accent-100 relative flex flex-col justify-between h-full p-8">
      <div className="cursor-pointer" onClick={() => setMobileNav(false)}>
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white ">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className={`${pathname === link.href && "border-b-2 border-accent"}`}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <div className="text-white">socials</div>
    </nav>
  );
};

export default MobileNav;
