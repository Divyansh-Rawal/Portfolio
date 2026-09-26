import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/reveal";
import { contact } from "@/data/resume";

export function Contact() {
  return (
    <footer id="contact" className="py-16">
      <div className="mx-auto max-w-3xl px-7">
        <SectionHeading kicker="06 — Contact" title="Let's work together" />
        <Reveal>
          <p className="mb-8 max-w-[50ch] text-[15px] text-muted">
            Open to ML, data engineering, and analytics roles. Reach out through
            any of the channels below.
          </p>
          <div className="flex flex-col gap-4 text-[14.5px] text-muted sm:flex-row sm:flex-wrap sm:gap-8">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-accent-teal">
              <Mail size={16} className="text-accent-teal" /> {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2 transition-colors hover:text-accent-teal">
              <Phone size={16} className="text-accent-teal" /> {contact.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-accent-teal" /> {contact.location}
            </span>
            <a href={contact.github} target="_blank" className="flex items-center gap-2 transition-colors hover:text-accent-teal">
              <Github size={16} className="text-accent-teal" /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" className="flex items-center gap-2 transition-colors hover:text-accent-teal">
              <Linkedin size={16} className="text-accent-teal" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
