import { ArrowLeft, EllipsisVertical } from "lucide-react";
import { Wrapper } from "../../../components/shared/wrapper";
import Phone from "@/components/phone";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function Security() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Safety and security
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Protect your account from hackers and scammers, and stop unwanted
          chats.
        </p>
        <Button>Learn more</Button>
      </section>
      <section className="relative">
        <Phone>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-2 ">
              <ArrowLeft size={24} />

              <h3 className="text-sm font-bold text-text-primary">Report</h3>
            </div>
            <EllipsisVertical size={24} />
          </section>
          <section className="mt-5">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md bg-inherit p-0">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/images/ellipse2.jpg"
                      alt="ellipse 2"
                      className="h-full w-full object-cover"
                      width={460}
                      height={460}
                    />
                  </div>
                  <h2 className="text-xl font-bold">Emily Rodriguez</h2>
                  <p className="text-sm text-gray-500">emily@gmail.com</p>
                  <p className="text-xs text-gray-400">
                    last seen today at 14:07
                  </p>
                </div>
                <div className="px-4 py-6">
                  <h2 className="mb-2 text-lg font-bold">Report Adriana?</h2>
                  <p className="mb-4 text-sm text-gray-600">
                    The last 5 messages from this contact will be forwarded to
                    Apex. The contact will not receive any notifications about
                    this.
                  </p>
                </div>
                <div className="flex justify-end space-x-2 px-4 pb-4">
                  <Button className="pointer-events-none" variant="ghost">
                    Cancel
                  </Button>
                  <Button className="pointer-events-none" variant="default">
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </Phone>
      </section>
    </Wrapper>
  );
}
