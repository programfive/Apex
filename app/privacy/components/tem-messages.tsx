import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, EllipsisVertical, File, FileImage } from "lucide-react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { Bell, Music, Lock, Clock, Settings } from "lucide-react";
export function TempMessages() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="max-w-[28.125rem]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Fade-in Messages
        </h2>
        <p className="my-6 text-lg text-gray-600">
          With the Fade-in Messages feature, you can set messages to disappear
          after you send them, allowing you to control which ones are kept and
          for how long.
        </p>
        <Button>More information</Button>
      </section>
      <section className="relative">
        <Phone>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-2 ">
              <ArrowLeft size={24} />
              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/codeHub.png"
                  alt="ellipse 2 "
                  width={660}
                  height={660}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <h3 className="text-sm font-bold text-text-primary">CodeHub</h3>
              </div>
            </div>
            <EllipsisVertical size={24} />
          </section>
          <section className="mt-4">
            <div className="flex  items-center justify-between  space-y-2  p-3 text-text-primary hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <Bell size={22} />
                <span className="text-sm font-bold">Mute notifications</span>
              </div>
              <Switch checked />
            </div>
            <div className="flex  items-center gap-3  space-y-2 p-3 text-text-primary hover:bg-gray-50">
              <Music size={22} />
              <span className="text-sm font-bold">Customize notifications</span>
            </div>
            <div className="flex  items-center gap-3  space-y-2 p-3 text-text-primary hover:bg-gray-50">
              <File size={22} />
              <span className="text-sm font-bold">
                Viewing multimedia files
              </span>
            </div>
            <div className="flex   gap-3  space-y-2 p-3 text-text-primary hover:bg-gray-50">
              <Lock className="mt-2 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">Encryption</span>
                <span className="text-[.875rem] text-gray-600 ">
                  Messages and calls are end-to-end encrypted. Tap to verify.
                </span>
              </div>
            </div>
            <div className="flex   gap-3  space-y-2 p-3 text-text-primary hover:bg-gray-50">
              <Clock size={22} className="mt-2" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">Temporary messages</span>
                <span className="text-[.875rem] text-gray-600">disabled</span>
              </div>
            </div>
            <div className="flex  items-center gap-3  space-y-2 p-3 text-text-primary hover:bg-gray-50">
              <Settings size={22} />
              <span className="text-sm font-bold">Settings</span>
            </div>
          </section>
        </Phone>
      </section>
    </Wrapper>
  );
}
