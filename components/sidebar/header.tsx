"use client";

import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { MenuToggle } from "@/components/ui/menu-toogle";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGATION_LINKS } from "@/constants";
import { NavItems } from "./nav-items";

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const pathname = usePathname();
  

  const backdropVariants = {
    open: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <Wrapper className="my-2 bg-white rounded-xl fixed top-0 right-0 left-0 z-[999] md:px-6 py-0">
      {isOpen && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => toggleOpen()}
              className="fixed inset-0 z-30 bg-black/60"
            />
          )}
        </AnimatePresence>
      )}
      <motion.header
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="flex items-center justify-between"
      >
        <Image src="/images/logo.svg" alt="Apex logo" width={95} height={36} />
        <ul className="hidden gap-6 md:flex "><NavItems /></ul>

        
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={"z-50 flex items-center justify-end md:hidden"}
        >
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
        {/* {renderSideBar()} */}
        <div className="hidden space-x-2 md:block">
          <Button
            variant="ghost"
            className="text-base font-medium text-text-primary"
          >
            Login
          </Button>
          <Button>Get started free</Button>
        </div>
      </motion.header>
    </Wrapper>
  );
};
