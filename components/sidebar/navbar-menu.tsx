"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";


const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.li
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.15 }}
      >
        <p
          className={
            "group text-base font-medium transition duration-300 hover:text-primary"
          }
        >
          <span>{item}</span>
          <span className="relative -bottom-1 block h-1 max-w-0 rounded-full bg-primary transition-all duration-500 group-hover:max-w-full"></span>
        </p>
      </motion.li>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="boder relative flex justify-center gap-x-6 rounded-full border-transparent bg-white py-6 shadow-input dark:border-white/[0.2] dark:bg-black "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  Icon,
}: {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
}) => {
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-lg transition-colors duration-300"
    >
      <div className="pt-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="rounded-lg p-2 text-text-primary group-hover:bg-primary group-hover:text-white"
        >
          <Icon size={28} />
        </motion.div>
      </div>
      <div className="max-w-48 flex-grow rounded-lg ">
        <h4 className="mb-1 text-xl font-bold text-text-primary ">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200"
    >
      {children}
    </Link>
  );
};
