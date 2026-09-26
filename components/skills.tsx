import { Reveal, SectionHeading } from "@/components/reveal";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="02 — Skills" title="Core skills" />
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <h3 className="mb-2.5 text-sm font-semibold text-accent-teal">{s.title}</h3>
              <p className="text-[14.5px] leading-loose text-muted">{s.items}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
