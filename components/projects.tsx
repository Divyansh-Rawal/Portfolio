import { Reveal, SectionHeading } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="work" className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="03 — Projects" title="Selected projects" />
        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-[17px] font-semibold">{p.title}</h3>
                  <span className="whitespace-nowrap font-mono text-xs text-accent-indigo">
                    {p.stack}
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[14.5px] text-muted">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
