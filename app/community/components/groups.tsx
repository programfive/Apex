import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";

import { ArrowLeft, EllipsisVertical, UsersRound, X } from "lucide-react";
import Image from "next/image";
import { MESSAGES } from "../constants";
import { Button } from "@/components/ui/button";
export function Groups() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Connect with your groups related to your environment
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Communities allow you to organize your related groups in one place and
          move from one to another easily.
        </p>
      </section>
      <section className="relative">
        <Phone>
          <section className=" flex items-center justify-between  px-4 pb-4">
            <ArrowLeft size={24} />
            <EllipsisVertical size={24} />
          </section>
          <section className="flex w-full flex-1 flex-col items-center justify-center ">
            <div>
              <Image
                src="/images/techZone.png"
                className="rounded-xl"
                alt="techZone"
                width={120}
                height={120}
              />
              <h3 className="mt-2 text-center text-lg font-bold text-text-primary">
                Tech Flow
              </h3>
              <p className="text-sm text-gray-600">
                Group <span>10 members</span>
              </p>
            </div>
          </section>
          <section className="mt-4 px-4 text-sm text-gray-800">
            <p>
              We welcome the technological innovation group, the administrators
              will send...
            </p>
            <p className="mt-2 text-orange-500">more information</p>
          </section>

          <section className="mt-2 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <UsersRound
                size={26}
                className="h-8 w-8 rounded-full  bg-orange-500 p-2 text-white"
              />

              <p className="text-sm text-gray-800">Invite members</p>
            </div>
            <X className="text-gray-800" size={18} />
          </section>
          <section>
            {MESSAGES.map((message: any) => (
              <div
                key={message.id}
                className="relative flex items-center p-4 hover:bg-gray-50"
              >
                <Image
                  src={message.avatar}
                  alt={message.name}
                  width={40}
                  height={40}
                  className="w-1O mr-2 h-10 rounded-full object-cover"
                />
                <div className="flex ">
                  <div className="flex-1">
                    <h3 className="font-bold">{message.name}</h3>
                  </div>
                  {/* <span className="text-sm">{message.time}</span>  */}
                </div>
              </div>
            ))}
          </section>
        </Phone>
      </section>
    </Wrapper>
  );
}
