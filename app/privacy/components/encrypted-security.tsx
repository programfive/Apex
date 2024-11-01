import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, EllipsisVertical, Lock } from "lucide-react";
export function EncryptedSecurity() {
  return (
    <Wrapper className="relative flex  items-center justify-center gap-24 ">
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Encrypted Backups
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Keep your online backups private. Turn on encrypted backups to extend
          the security of end-to-end encryption to messages you store in iCloud
          or Google Drive.
        </p>
      </section>
      <section className="relative">
        <ArrowLeft
          size={24}
          className="absolute left-6 top-14 z-20 text-text-primary"
        />
        <Phone>
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 mt-4 rounded-full bg-orange-100 p-6">
              <Lock className="h-12 w-12 text-primary" />
            </div>

            <h2 className="mb-4 text-lg font-bold">
              Do you want to create your end-to-end encrypted backup?
            </h2>

            <p className="mb-20 text-sm text-gray-600">
              The encryption process will be completed in the background. It may
              take some time.
            </p>
            <Button className="pointer-events-none mb-2 w-full">Crate</Button>
            <Button className="pointer-events-none w-full" variant="ghost">
              Cancel
            </Button>
          </div>
        </Phone>
      </section>
    </Wrapper>
  );
}
