import { EncryptedSecurity } from "./components/encrypted-security";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { Restriction } from "./components/restriction";
import { SilenceCalls } from "./components/silence-calls";
import { TempMessages } from "./components/tem-messages";
import { OnlineTime } from "./components/online-time";
import { Security } from "./components/security";
function PrivacyPage() {
  return (
    <>
      <Hero />
      <Features />
      <Restriction />
      <TempMessages />
      <SilenceCalls />
      <EncryptedSecurity />
      <OnlineTime />
      <Security />
    </>
  );
}

export default PrivacyPage;
