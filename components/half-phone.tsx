import Image from "next/image";

interface HalfPhoneProps {
  children: React.ReactNode;
}
export function HalfPhone({ children }: HalfPhoneProps) {
  return (
    <div className="relative h-96 overflow-y-hidden">
      <Image src="/images/iphone.svg" alt="phone" width={350} height={350} />
      <div className="absolute left-0 right-0 top-16 z-30 px-4 ">
        {children}
      </div>
    </div>
  );
}
