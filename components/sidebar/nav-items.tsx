"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";

import { Lock, PhoneCall, Users, Smile } from "lucide-react";
const mobileTabVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
  closed: {
    x: "100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.05,
      staggerDirection: -1,
      bounce: 0,
    },
  },
};

export function NavItems({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderMenuTabs = (useMobileStyling: boolean) => {
    return (
      <>
        {NAVIGATION_LINKS.map((link, index) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.15 }}
            variants={useMobileStyling ? mobileTabVariants : {}}
            key={index}
          >
            <Link
              className={cn(
                "group text-base font-medium transition duration-300 hover:text-primary",
                pathname === link.href ? "text-primary" : "text-text-primary"
              )}
              href={link.href}
            >
              <span>{link.name}</span>
              <span className="relative -bottom-1 block h-1 max-w-0 rounded-full bg-primary transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          </motion.li>
        ))}
      </>
    );
  };

  const renderSideBar = () => {
    return (
      <motion.ul
        variants={sidebar}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed right-0  top-0 z-40 flex h-screen w-4/5 flex-col items-center space-y-[20px] bg-white pt-24 shadow-lg md:hidden"
      >
        {renderMenuTabs(true)}
      </motion.ul>
    );
  };

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 rounded bg-primary p-2 text-white md:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {renderSideBar()}

      <ul className="hidden items-center space-x-6 md:flex">
        {renderMenuTabs(false)}
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Functions">
            <div className="grid grid-cols-2 gap-10 p-4 text-sm">
              <ProductItem
                title="Privacy"
                href="/privacy"
                description="End-to-end encryption and privacy controls."
                Icon={Lock}
              />
              <ProductItem
                title="Stay in contact"
                href="/reach"
                description="Free messages and calls* worldwide."
                Icon={PhoneCall}
              />
              <ProductItem
                title="Join a community"
                href="/community"
                description="Group conversations are now simple."
                Icon={Users}
              />
              <ProductItem
                title="Express yourself"
                href="/expression"
                description="Say what you feel with stickers, GIFs and more."
                Icon={Smile}
              />
            </div>
          </MenuItem>
        </Menu>
      </ul>
    </div>
  );
}
