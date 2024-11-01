import Phone from "@/components/phone";
import { Wrapper } from "@/components/shared/wrapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Eye,
  Users,
  UserMinus,
  UserX,
  ArrowLeft,
  EllipsisVertical,
} from "lucide-react";
export function OnlineTime() {
  return (
    <Wrapper className="relative my-10 flex items-center justify-center gap-24">
      <section className="relative">
        <Phone>
          <section className="flex items-center justify-between border-b border-border px-2 pb-2">
            <div className="flex items-center gap-4 ">
              <ArrowLeft size={24} />
              <h3 className="text-sm font-bold text-text-primary">
                Last time online
              </h3>
            </div>
            <EllipsisVertical size={24} />
          </section>
          <section className="space-y-6 rounded-lg bg-white p-4">
            <div>
              <h3 className="mb-4 text-sm font-bold">
                Who can see my last seen time
              </h3>
              <RadioGroup defaultValue="my-contacts">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="everyone" id="everyone" />
                    <Label htmlFor="everyone" className="flex items-center">
                      Everyone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="my-contacts" id="my-contacts" />
                    <Label htmlFor="my-contacts" className="flex items-center">
                      My contacts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nobody" id="nobody" />
                    <Label htmlFor="nobody" className="flex items-center">
                      Nobody
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold">
                Who can see when I&apos;m online
              </h3>
              <RadioGroup defaultValue="everyone">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="everyone" id="everyone-online" />
                    <Label
                      htmlFor="everyone-online"
                      className="flex items-center"
                    >
                      Everyone
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="same-as-last-seen"
                      id="same-as-last-seen"
                    />
                    <Label htmlFor="same-as-last-seen">
                      Same as last seen time
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              If you don&apos;t share your Last Seen and Online information, you
              won&apos;t be able to see other people&apos;s.
            </p>
          </section>
        </Phone>
      </section>
      <section className="max-w-[450px]">
        <h2 className="text-4xl font-bold leading-tight text-text-primary">
          Last seen time and Online
        </h2>
        <p className="my-6 text-lg text-gray-600">
          Choose only who you want to see you. You can customize your privacy
          settings to choose who can see if you&apos;re online and when you last
          used Apex.
        </p>
      </section>
    </Wrapper>
  );
}
