import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, EllipsisVertical } from "lucide-react";
import Image from "next/image";
export function SilenceCalls() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="relative">
        <Phone>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-4 ">
              <ArrowLeft size={24} />
              <h3 className="text-sm font-semibold text-text-primary">Calls</h3>
            </div>
            <EllipsisVertical size={24} />
          </section>
          <section className="mt-4 px-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                Silence calls from unknown numbers
              </p>
              <Switch />
            </div>
            <p className="text-[14px] text-gray-600 my-2">
              Calls from unknown numbers are silenced, but will still appear in
              the calls tab and in your notifications.
            </p>
            <Button className="pointer-events-none" size='sm'>Learn more</Button>
          </section>
        </Phone>
      </section>
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-semibold leading-tight text-text-primary">
          Silence calls from strangers
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Silence calls from strangers Avoid spam calls and calls from unknown
          contacts so you can focus on the conversations that are really
          important to you.
        </p>
      </section>
    </Wrapper>
  );
}
