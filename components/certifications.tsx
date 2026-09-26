import { SectionHeading, Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/resume";

export function Certifications() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="05 — Certifications" title="Certifications" />
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {certifications.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
