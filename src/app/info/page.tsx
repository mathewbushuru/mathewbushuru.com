import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Mathew Bushuru | Info",
};

export default function InfoPage() {
  return (
    <div className="flex h-full flex-col items-end gap-1 pr-3  pt-32 sm:gap-2 sm:pr-8 sm:pt-40">
      {/* About  */}
      <Section>
        <SectionHeader>About</SectionHeader>
        <p className="text-xs font-light leading-5 tracking-wide text-muted sm:text-sm">
          I'm Mathew and I enjoy building polished user experiences.
        </p>
      </Section>
      {/* Contact  */}
      <Section>
        <SectionHeader>Contact</SectionHeader>
        <ContactLink
          linkDesc="Email"
          urlLink="mailto:mathewbushuru@proton.me"
          shownLink="mathewbushuru@proton.me"
        />
        <ContactLink
          linkDesc="Website"
          urlLink="https://mathewbushuru.vercel.app/"
          shownLink="mathewbushuru.com"
        />
        <ContactLink
          linkDesc="GitHub"
          urlLink="https://github.com/mathewbushuru"
          shownLink="mathewbushuru"
        />
      </Section>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <h4 className="w-60 sm:w-[480px]">{children}</h4>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm leading-8 tracking-wide sm:mb-1 sm:text-base sm:leading-7">
      {children}
    </h4>
  );
}

function ContactLink({
  linkDesc,
  urlLink,
  shownLink,
}: {
  linkDesc: string;
  urlLink: string;
  shownLink: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-light leading-5 tracking-wider text-foreground sm:text-sm sm:mb-0.5">
      <span className="text-xs  text-muted sm:text-sm">{linkDesc}: </span>
      <a
        href={urlLink}
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 hover:underline"
      >
        <span className="flex items-center gap-1">
          {shownLink}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </a>
    </div>
  );
}
