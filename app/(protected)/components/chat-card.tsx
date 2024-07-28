import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ChatCard {
  name: string;
  imageSrc: string;
  message: string;
  className?: string;
}

export function ChatCard({ imageSrc, name, message, className }: ChatCard) {
  return (
    <Card
      className={cn("flex w-80  items-center gap-4 bg-white/90 p-4", className)}
    >
      <div className="relative h-10 w-10  flex-shrink-0">
        <Image
          src={imageSrc}
          alt={`${name} profile`}
          fill
          className="rounded-full object-cover"
        />
      </div>

      <div className="flex-grow overflow-hidden">
        <h2 className="truncate text-base font-bold text-text-primary">
          {name}
        </h2>
        <p className="line-clamp-2 text-sm text-gray-600">{message}</p>
      </div>
    </Card>
  );
}
