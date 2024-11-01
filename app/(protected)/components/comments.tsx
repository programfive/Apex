import { Wrapper } from "@/components/shared/wrapper";
import Image from "next/image";
interface TestimonialProps {
  name: string;
  role: string;
  title: string;
  comment: string;
  avatarUrl: string;
}

const Testimonial = ({
  name,
  role,
  title,
  avatarUrl,
  comment,
}: TestimonialProps) => (
  <div className=" flex flex-col gap-12">
    <div className="relative rounded-lg  bg-white shadow-md">
      <div className="clip-path-triangle absolute -bottom-5  left-1/2 h-10 w-16 -translate-x-1/2 rotate-180 transform bg-white shadow-md" />
      <div className="p-6">
        <h3 className=" text-center text-lg font-bold text-primary">
          &quot;{title}&quot;
        </h3>
        <p className="my-6 text-center text-lg text-gray-600">{comment}</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-4">
      <Image
        src={avatarUrl}
        alt={name}
        width={450}
        height={450}
        className=" h-12 w-12 rounded-full object-cover"
      />
      <div className="space-y-1 text-white">
        <p className="font-bold ">{name}</p>
        <p className="text-sm text-gray-200">{role}</p>
      </div>
    </div>
  </div>
);
export default function Comments() {
  return (
    <div className="mb-20 overflow-hidden bg-primary">
      <Wrapper className="relative py-14">
        <div className="absolute -left-1/4 -top-[21.875rem] h-[38.75rem] w-[38.75rem] scale-50 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
        <div className="absolute -left-1/4 -top-[21.875rem] h-[38.75rem] w-[38.75rem] scale-75 transform rounded-full border-4 border-white/80 bg-transparent opacity-30" />
        <div className="absolute -left-1/4 -top-[21.875rem] h-[38.75rem] w-[38.75rem] scale-90 transform rounded-full border-4 border-white/80 bg-transparent opacity-30 " />
        <div className="absolute -left-1/4 -top-[21.875rem] h-[38.75rem] w-[38.75rem] scale-105 transform rounded-full border-4 border-white/80 bg-transparent opacity-30 " />
        <section className="mb-8 ">
          <div className="text-center text-4xl font-bold leading-tight text-white">
            <h2> Our blessed client </h2>
            <div className="flex items-center justify-center gap-2">
              <span>said about us</span>
              <Image
                src="/images/love-emoji.svg"
                width={34}
                height={34}
                alt="love emoji "
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Testimonial
            name="Wade Warren"
            role="CEO, Plexi Corporation"
            title="Incredible Experience"
            comment="We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their exceptional ability to adapt quickly to the concept.
"
            avatarUrl="/images/ellipse7.jpg"
          />
          <Testimonial
            name="Esther Howard"
            role="CEO, Antropict Fundation"
            title="Dependable, Responsive, Professional"
            comment="Fermin Apps has teamed up for various projects such as photo sharing apps and custom social media apps. The experience has been pleasant, professional and exceeded our expectations. The team is always thinking outside the box."
            avatarUrl="/images/ellipse8.jpg"
          />
        </section>
      </Wrapper>
    </div>
  );
}
