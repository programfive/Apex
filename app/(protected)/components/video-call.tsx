import { Wrapper } from "@/components/shared/wrapper";
import Image from "next/image";

export function VideoCall() {
  return (
    <div className="bg-backgroundAccent">
      <Wrapper className="flex items-center gap-24  py-20">
        <div className="relative">
          <Image
            src="/images/video-call.svg"
            alt="video call"
            width={580}
            height={580}
            className="rounded-md object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-black/60 px-12 py-4">
            <Image
              src="/images/repeat-one.svg"
              alt="repeat one "
              width={35}
              height={35}
            />
            <Image
              src="/images/video.svg"
              alt="repeat one "
              width={35}
              height={35}
            />

            <div className="rounded-lg bg-red-500 p-2">
              <Image
                src="/images/call.svg"
                alt="call "
                width={45}
                height={45}
              />
            </div>
            <Image src="/images/like.svg" alt="like " width={35} height={35} />
          </div>
        </div>
        <div className="max-w-[27.5rem] ">
          <h2 className="text-4xl font-bold leading-tight text-text-primary">
            Meet your customers, with live video chat
          </h2>
          <div className="mt-6 space-y-4">
            <p className="text-lg text-gray-600">
              Great software that allows you to chat from any place at any time
              without any interruption.
            </p>
            <p className="text-lg text-gray-600">
              Great software that allows you to chat from any place at any time
              without any interruption.Great software that allows you to chat
              from any place at any time without any interruption.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
