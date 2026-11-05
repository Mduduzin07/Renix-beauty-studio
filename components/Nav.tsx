import React, { useContext } from "react";
import Link from "next/link";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";

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

type Props = {};

function Nav({}: Props) {
  const pathname = usePathname();

  return (
    <nav>
      <div className="container mx-auto flex gap-8">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`${pathname === link.href && "border-b-2 border-accent"} uppercase`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
