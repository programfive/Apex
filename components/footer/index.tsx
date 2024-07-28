import { Wrapper } from "@/components/shared/wrapper";
import { NAVIGATION_LINKS, SOCIAL_NETWORKS } from "@/constants";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <Wrapper className="py-6">
      <footer>
        <section className="mb-4 flex items-center justify-between">
          {" "}
          <Image
            src="/images/logo.svg"
            alt="Apex logo"
            width={95}
            height={36}
          />
          <ul className="flex gap-4">
            {NAVIGATION_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  className="group  text-base font-medium text-text-primary transition duration-300 hover:text-primary"
                  href={link.href}
                >
                  <span>{link.name}</span>
                  <span className="relative -bottom-1 block h-1 max-w-0 rounded-full bg-primary transition-all duration-500 group-hover:max-w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-2">
            {SOCIAL_NETWORKS.map((item, index) => (
              <Link href={item.link} key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </Link>
            ))}
          </ul>
        </section>
        <hr className="my-4 border-t border-gray-300" />
        <section className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <p>&copy; Copyright 2022, All Rights Reserved</p>
          <div className="flex items-center gap-4 ">
            <p>Privacy Policy </p>
            <p>Terms & Conditions</p>
          </div>
        </section>
      </footer>
    </Wrapper>
  );
}
