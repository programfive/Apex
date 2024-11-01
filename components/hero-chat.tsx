
import { cn } from "@/lib/utils";
import { ArrowLeft, Phone, EllipsisVertical, Video } from "lucide-react";

interface HeroChatProps {
  urlAvatar: string;
  name: string;
  state?: "Online" | "Offline";
  children?:React.ReactNode;
}
import Image from "next/image";
export function HeroChat({ urlAvatar, name, state,children }: HeroChatProps) {
  return (
    <section className="relative flex w-full flex-row items-center justify-between  border-b  border-border px-4 py-2">
      <div className="flex items-center gap-2">
        <ArrowLeft size={24} />
        <div className="flex items-center gap-2 ">
          <Image
            src={urlAvatar}
            alt="ellipse 2 "
            width={460}
            height={460}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="text-sm ">
            <h3 className="font-bold text-lg text-text-primary">{name}</h3>
            <p className="text-gray-600">{state}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Phone size={22} />
        <Video size={24} />
        <EllipsisVertical size={24} />
      </div>

    {children}
    </section>
  );
}
