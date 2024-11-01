import { Call } from "./components/call";
import { Communication } from "./components/communication";
import { ConversationStarter } from "./components/ConversationStarter";
import { Hero } from "./components/hero";
function ReachPage() {
  return (
    <>
      <Hero />
      <Communication />
      <Call/>
      <ConversationStarter/>
    </>
  );
}
export default ReachPage;
