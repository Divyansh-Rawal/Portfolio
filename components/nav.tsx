"use client";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-7 py-4">
        <span className="text-[15px] font-medium tracking-tight">Divyansh Rawal</span>
        <div className="flex gap-6 text-sm text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
