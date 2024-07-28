import { Wrapper } from "@/components/shared/wrapper";
import Image from "next/image";
import { TEAM_MEMBERS } from "../constants";

export function MeetTeam() {
  return (
    <Wrapper className="mb-14">
      <h2 className="mb-16 text-center text-4xl font-semibold leading-tight text-text-primary">
        Meet the team
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="flex flex-col items-start">
            <Image
              src={member.image}
              alt={member.name}
              width={320}
              height={320}
              className="mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-text-primary">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
