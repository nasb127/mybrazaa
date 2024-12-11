"use client";

import { useState } from "react";
import NavButton from "./NavButton";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/utils/NavData";
import Link from "next/link";

import Github from "@/../public/github.svg";
import Dribbble from "@/../public/dribbble.svg";
import Twitter from "@/../public/x.svg";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative block sm:hidden">
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            
          >
            <ul className="flex flex-col gap-2 flex-1">
              {navItems.map(({ label }) => (
                <Link href="/" key={label}>
                  <li className="text-2xl font-medium">{label}</li>
                </Link>
              ))}
            </ul>
            <div className="flex gap-4 mt-8">
              <Link href="#">
                <Github className="h-5 w-5 fill-github" />
              </Link>
              <Link href="#">
                <Dribbble className="h-5 w-5 fill-dribbble" />
              </Link>
              <Link href="#">
                <Twitter className="h-5 w-5 fill-twitter" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
