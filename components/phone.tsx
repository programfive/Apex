import Image from "next/image";
interface PhoneProps {
  children: React.ReactNode;
}
export default function Phone({ children }: PhoneProps) {
  return (
    <div >
      <div className="relative">
        <div className="absolute bottom-5  left-2/4 z-50 h-1 w-32 -translate-x-2/4 rounded-full bg-black" />

        <Image src="/images/iphone.svg" alt="Iphone" width={285} height={285} />
      </div>
      <div className="absolute left-0 right-0 top-14 z-20 h-[500px]  px-[14.6px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
