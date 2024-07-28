import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
export function Wrapper({ children, className }: WrapperProps) {
  return (
    <main className={cn("mx-auto max-w-screen-xl  p-4", className)}>
      {children}
    </main>
  );
}
