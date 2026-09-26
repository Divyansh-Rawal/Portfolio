import { SectionHeading } from "@/components/reveal";
import { about } from "@/data/resume";

export function About() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="01 — About" title="A fast-learning generalist across the data stack" />
        <p className="max-w-[66ch] text-[15.5px] leading-relaxed text-muted">{about}</p>
      </div>
    </section>
  );
}
