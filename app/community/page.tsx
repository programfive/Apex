import { Hero } from "./components/hero";
import { Communication } from "./components/comunication";
import { Groups } from "./components/groups";
import { Administrator } from "./components/administrator";
function CommunityPage() {
  return (
    <>
      <Hero />
      <Communication />
      <Groups />
      <Administrator />
    </>
  );
}
export default CommunityPage;
