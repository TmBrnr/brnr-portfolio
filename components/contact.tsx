import Section from "@/components/ui/section";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center w-full rounded-xl outline outline-1 outline-zinc-600/50">
        <div className="w-full mx-auto rounded-md  h-full overflow-hidden">
          <Vortex
            className="flex items-center flex-col justify-center  w-full"
            baseHue={230}
            particleCount={200}
            baseSpeed={0.001}
            rangeSpeed={1}
            baseRadius={1}
            rangeRadius={2}
          >
            <div className="flex flex-col justify-center items-center gap-4 py-10  w-full ">
              <h2 className="text-4xl font-bold text-zinc-200 text-center">
                Contact Me
              </h2>
              <p className="text-zinc-200 text-center max-w-md">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me for any inquiries or collaborations.
              </p>
              <Button href="mailto:tim@timboerner.com">Get in touch</Button>
            </div>
          </Vortex>
        </div>
      </div>
    </Section>
  );
}
