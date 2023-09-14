"use client";
import { usePathname } from "next/navigation";
import { NewspaperIcon, HammerIcon, Edit3Icon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function PageDesc() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <Section>
        <Text>Featured Projects:</Text>
      </Section>
    );
  }

  if (pathname === "/info") {
    return (
      <Section className="gap-2">
        <NewspaperIcon />
        <Text>Info</Text>
      </Section>
    );
  }

  if (pathname === "/projects") {
    return (
      <Section className="gap-2">
        <HammerIcon />
        <Text>Projects</Text>
      </Section>
    );
  }

  if (pathname === "/writing") {
    return (
      <Section className="gap-2">
        <Edit3Icon />
        <Text>Writing</Text>
      </Section>
    );
  }

  return null;
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full items-end pb-12 ", className)}>
      {children}
    </div>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-sm font-normal">{children}</span>;
}
