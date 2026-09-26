import { Reveal, SectionHeading } from "@/components/reveal";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="04 — Experience" title="Experience" />
        {experience.map((e) => (
          <Reveal key={e.role}>
            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-[150px_1fr] sm:gap-6">
              <div className="font-mono text-[13px] text-muted">
                {e.date}
                <br />
                {e.location}
              </div>
              <div>
                <h3 className="text-base font-semibold">{e.role}</h3>
                <div className="mb-3 text-sm text-accent-teal">{e.org}</div>
                <ul className="list-disc space-y-1.5 pl-4 text-[14.5px] text-muted">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
