import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bell,
  Home,
  MessageSquare,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import { MESSAGES, ONLINE_USERS } from "../constants";
import Phone from "@/components/phone";

export function Restriction() {
  return (
    <Wrapper className="flex items-center justify-center gap-24">
      <section className="relative bg-red-500">
        <div className="absolute bottom-5  left-2/4 z-50 h-1 w-32 -translate-x-2/4 rounded-full bg-red-500" />

        <Phone>
          <div>
            <div className=" px-4 pb-3 pt-2 ">
              <h3 className="text-lg font-bold text-text-primary">Messages</h3>

              <div className="mt-2 flex gap-4">
                <Input type="text" placeholder="Search conversation.." />
                <div className="flex items-center  text-text-primary">
                  <Search size={20} />
                </div>
              </div>
            </div>
            <div>
              {MESSAGES.map((message) => (
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
                  <div className="flex">
                    <div className="flex-1">
                      <h3 className="font-bold">{message.name}</h3>
                      <p className="text-sm text-gray-600">{message.message}</p>
                    </div>
                    {/* <span className="text-sm">{message.time}</span>  */}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-2 left-0 right-0  px-6">
              <div className="relative flex justify-between border-t border-border bg-white p-3">
                <div className="absolute -top-7 left-[88px] flex  items-center justify-center ">
                  <div className="flex rounded-full bg-primary p-4 text-white">
                    <Plus size={22} />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Home size={22} />
                  <MessageSquare size={22} />
                </div>
                <div className="flex items-center gap-8">
                  <Bell size={22} />
                  <Settings size={22} />
                </div>
              </div>
            </div>
          </div>
        </Phone>
      </section>
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Restrict chats
        </h2>
        <p className="my-6 text-lg text-gray-600">
          The password protects your most personal chats, so that no one using
          your phone can see them. This feature adds an extra layer of security,
          ensuring that your private conversations stay private.
        </p>
        <Button>More information</Button>
      </section>
    </Wrapper>
  );
}
