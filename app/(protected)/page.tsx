"use client";
import { Begin } from "./components/begin";
import Comments from "./components/comments";
import { Conversation } from "./components/conversation";
import { Features } from "./components/features";
import { Footer } from "../../components/footer";
import { Hero } from "./components/hero";
import { Orders } from "./components/orders ";
import { VideoCall } from "./components/video-call";
function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <VideoCall />
      <Conversation />
      <Orders />
      <Comments />
      <Begin />
    </>
  );
}
export default HomePage;
