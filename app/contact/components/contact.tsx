"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Wrapper } from "@/components/shared/wrapper";
import { ISSUES } from "../constants";
import { Mail, MapPin, PhoneOutgoing } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_NETWORKS } from "@/constants";
import { toast } from "sonner";
const ContactSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(10, { message: "Phone number is required" }),
  subject: z.enum(["General Inquiry", "Technical Support", "Billing", "Other"]),
  message: z.string().min(10, { message: "Message is required" }),
});

export const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    if (values) {
      toast.success("Thank you for contacting us! We will get back shortly.");
    }
  }
  return (
    <Wrapper className="relative mb-10">
      <section className="mb-4 flex flex-col items-center justify-center gap-1">
        <h2 className="text-center text-5xl font-semibold leading-tight text-text-primary">
          <span className="px-3 text-primary">Get in </span>
          <br />
          Contact With Us
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </section>
      <section className="flex flex-col gap-8 bg-white md:flex-row">
        <section className="relative overflow-hidden rounded-lg bg-primary p-6 text-white md:w-1/3">
          <div className="relative z-10">
            <h2 className=" mb-2 text-3xl font-bold">Contact Information</h2>
            <p className=" mb-4 text-gray-100">
              Say something to start a live chat, and we&apos;ll assist you
              promptly!
            </p>
          </div>
          <div className="z-10  my-16 space-y-6">
            <p className="flex items-center gap-4">
              <span className="font-semibold">
                <PhoneOutgoing size={24} />
              </span>{" "}
              +591 766 20678
            </p>
            <p className="flex items-center gap-4">
              <span className="font-semibold">
                <Mail size={24} />
              </span>{" "}
              kennedysuedavid24@gmail.com
            </p>
            <p className="flex items-center gap-4">
              <span className="font-semibold">
                <MapPin size={24} />
              </span>
              Calle 4 de Noviembre, No. 54, <br /> Equipetrol Zone, Santa Cruz
              de la Sierra, Bolivia.
            </p>
          </div>
          <div className="flex  space-x-4">
            {SOCIAL_NETWORKS.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="rounded-full bg-white p-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </Link>
            ))}
          </div>
        </section>
        <section className=" px-8 md:w-2/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Select Subject?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row gap-6"
                      >
                        {ISSUES.map((item: string) => (
                          <FormItem
                            className="flex items-center space-x-2 space-y-0"
                            key={item}
                          >
                            <FormControl>
                              <RadioGroupItem value={item} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-[#f97316] text-white hover:bg-[#ea580c]"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </section>
      </section>
    </Wrapper>
  );
};
