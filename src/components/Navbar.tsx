import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";
import { navItems } from "@/utils/NavData";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 bg-black text-white" >
      {/* Logo */}
      <h1 className="font-bold text-2xl">GAMES<span className="text-yellow-600">PORTAL</span></h1>
      {/* Navigation items */}
      <ul className="hidden sm:flex gap-6">
        {navItems.map(({ label }) => (
          <Link href="/" key={label}>
            <li>{label}</li>
          </Link>
        ))}
      </ul>
      <NavMenu />
    </nav>
  );
};

export default Navbar;
