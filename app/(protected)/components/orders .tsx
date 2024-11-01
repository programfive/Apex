import { Wrapper } from "@/components/shared/wrapper";
import { MESSAGE_ORDERS } from "@/app/(protected)/constants";
import Image from "next/image";

export function Orders() {
  return (
    <Wrapper className="mb-20 flex gap-52 md:px-16">
      <section className=" relative  ml-1 w-[416px] rounded-xl shadow-md">
        <Image
          src="/images/ellipse1.jpg"
          alt="ellipse 1"
          width={480}
          height={480}
          className="absolute -left-5 top-24  h-14 w-14 rounded-full object-cover"
        />
        <Image
          src="/images/ellipse2.jpg"
          alt="ellipse 4"
          width={480}
          height={480}
          className="absolute -bottom-3 left-10 h-14 w-14 rounded-full  object-cover"
        />
        <Image
          src="/images/ellipse3.jpg"
          alt="ellipse 5"
          width={480}
          height={480}
          className="absolute -right-4 top-56 h-14 w-14 rounded-full  object-cover"
        />
        <div className="p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Image
                  src="/images/inbox.svg"
                  width={24}
                  height={25}
                  alt="inbox"
                />
              </div>
              <h2 className="ml-3 text-2xl font-bold text-gray-800">Inbox</h2>
            </div>
            <div className="flex gap-2">
              <span className="block h-5 w-5 rounded-full bg-gray-100"></span>
              <span className="block h-5 w-5 rounded-full bg-gray-100"></span>
              <span className="block h-5 w-5  rounded-full bg-gray-100"></span>
            </div>
          </div>
          <div className="rounded-lg bg-gray-100 p-4">
            <ul className="space-y-4">
              {MESSAGE_ORDERS.map((message) => (
                <li
                  key={message.id}
                  className="flex items-center gap-2 space-x-3 rounded-lg bg-white p-3"
                >
                  {message.type === "message" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                      <Image
                        src="/images/message.svg"
                        width={24}
                        height={20}
                        alt="message"
                      />
                    </div>
                  )}
                  {message.type === "email" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                      <Image
                        src="/images/email.svg"
                        width={24}
                        height={20}
                        alt="message"
                      />
                    </div>
                  )}

                  {message.type === "facebook" && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                      <Image
                        src="/images/messenger.svg"
                        width={24}
                        height={20}
                        alt="message"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-bold text-text-primary">
                      {message.type === "message" && "New Message"}
                      {message.type === "email" && "New Email"}
                      {message.type === "facebook" && "Facebook Messenger"}
                    </p>
                    <p className="text-sm text-gray-600">{message.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className=" py-12">
        <div className="max-w-sm">
          <h2 className="text-3xl  font-bold leading-tight text-text-primary">
            Get direct orders from <br /> your customers
          </h2>
          <p className="my-6  text-lg text-gray-600">
            Create custom landing pages with Rareblocks that converts more
            visitors than any website. With lots of unique blocks easily build a
            page. There are many variations of passages of available.
          </p>
        </div>
        <div className="mt-16 flex gap-6">
          <div className="flex gap-4">
            <h2 className="text-4xl text-text-primary font-bold ">4.3K+</h2>
            <p className="text-sm text-gray-600">
              Website’s <br /> Powering
            </p>
          </div>
          <div className="flex gap-4">
            <h2 className="text-4xl text-text-primary font-bold ">7M+</h2>
            <p className="text-sm text-gray-600">
              Chats in
              <br /> Last 2024
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
