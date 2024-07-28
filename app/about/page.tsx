import { MeetTeam } from "./components/meet-team";
import { Hero } from "./components/hero";
import { Values } from "./components/values";
import { Footer } from "@/components/footer";
import { JoinTeam } from "./components/join-team";

function AboutPage() {
  return (
    <>
      <Hero />
      <MeetTeam />
      <Values />
      <JoinTeam />
    </>
  );
}
export default AboutPage;
