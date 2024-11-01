import { FooterChat } from "@/components/footer-chat";
import PhoneComponent from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, EllipsisVertical, Video, Phone, Send } from "lucide-react";
import Image from "next/image";

export function ConversationStarter() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="relative">
        <PhoneComponent>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-2 ">
              <ArrowLeft size={24} />
              <div className="flex items-center gap-2 ">
                <Image
                  src="/images/codeHub.png"
                  alt="codeHub"
                  width={900}
                  height={900}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h3 className="text-sm font-bold text-text-primary">CodeHub</h3>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Video size={22} />
              <Phone size={22} />
              <EllipsisVertical size={24} />
            </div>
          </section>
          <section className="space-y-4 p-4">
            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse1.jpg"
                alt="Sarah Johnson"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="bg-gray-100 p-2 ">
                <Image
                  src="/images/setup.jpg"
                  alt="food"
                  width={160}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse1.jpg"
                alt="Sarah Johnson"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="rounded-lg bg-gray-100 p-2">
                <p className="max-w-52 text-sm">Emily!</p>
              </div>
            </div>

            <div className="flex items-start justify-end gap-2">
              <div className="rounded-lg bg-orange-500 bg-primary p-2 text-white">
                <p className="max-w-52 text-sm">How did you do that?</p>
              </div>
              <Image
                src="/images/ellipse2.jpg"
                alt="ellipse 2"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="flex items-start gap-2">
              <Image
                src="/images/ellipse1.jpg"
                alt="Sarah Johnson"
                width={480}
                height={480}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="rounded-lg bg-gray-100 p-2">
                  <p className="max-w-52 text-sm">It&apos;s a secret 😋</p>
                </div>
                <div className="flex w-20 rounded-lg bg-gray-100 p-2">
                  <p className="text-2xl">...</p>
                </div>
              </div>
            </div>
          </section>
          <section className="absolute bottom-4 ">
            <div className="flex gap-2 px-6">
              <Input
                placeholder="Write your message..."
                className="flex-grow   placeholder-gray-400 "
              />
              <Button>
                <Send size={24} />
              </Button>
            </div>
          </section>
        </PhoneComponent>
      </section>
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          You&apos;re just a message away
        </h2>
        <p className="my-6 text-lg text-gray-600">
          More than 2 billion people in over 180 countries use Apex. No matter
          who you want to reach, chances are that person is on Apex.
        </p>
      </section>
    </Wrapper>
  );
}
