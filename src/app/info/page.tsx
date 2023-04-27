import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  workExperienceItems,
  extraExperienceItems,
  awardItems,
  featureItems,
} from "./infopageData";

export const metadata = {
  title: "Mathew Bushuru | Info",
};

export default function InfoPage() {
  return (
    <div className="scrollbar-hide flex h-full flex-col items-end gap-1  overflow-y-auto pb-8 pr-3 pt-32 sm:gap-2 sm:pr-40 sm:pt-40 2xl:pr-60">
      {/* About  */}
      <Section>
        <SectionHeader>About</SectionHeader>
        <SectionDesc>
          I'm Mathew and I enjoy building polished user interfaces.
        </SectionDesc>
      </Section>

      {/* Currently */}
      {false && (
        <Section>
          <SectionHeader>Currently</SectionHeader>
          <ExperienceItem
            title=""
            companyUrl=""
            timePeriod=""
            jobLocation=""
            jobType=""
            bulletPoints={[""]}
          />
        </Section>
      )}

      {/* Work Experience  */}
      <Section>
        <SectionHeader>Work Experience</SectionHeader>

        {workExperienceItems.map((item, index) => {
          return (
            <ExperienceItem
              key={item.companyUrl}
              title={item.title}
              companyUrl={item.companyUrl}
              timePeriod={item.timePeriod}
              jobLocation={item.jobLocation}
              jobType={item.jobType}
              bulletPoints={item.bulletPoints}
            />
          );
        })}
      </Section>

      {/* Skills  */}
      <Section>
        <SectionHeader>Skills</SectionHeader>
        <SectionDesc className="mb-1  font-normal text-foreground">
          <a
            href={
              "https://mathewb-github-stats.vercel.app/api/top-langs?username=mathewbushuru&langs_count=10"
            }
            target="_blank"
            rel="noreferrer"
            className="decoration-muted underline-offset-4 hover:underline"
          >
            <span>Most Used Languages :</span>
            <ArrowUpRight className="inline-block h-3 w-3" />
          </a>{" "}
          <span className="font-light text-muted">
            JavaScript, Python, Java, TypeScript, C, CSS, HTML (in descending
            order).
          </span>
        </SectionDesc>
        <SectionDesc className="mb-1  font-normal text-foreground">
          <span>Tools and Frameworks :</span>{" "}
          <span className="font-light text-muted">
            ReactJS, NextJS, React Native, TailwindCSS, NodeJS / ExpressJS,
            FastAPI, MongoDB, MySQL, Matlab / Simulink, Git, AWS, Firebase.
          </span>
        </SectionDesc>
      </Section>

      {/* Education  */}
      <Section>
        <SectionHeader>Education</SectionHeader>
        <SectionDesc className="mb-1  font-normal text-foreground">
          University of British Columbia
        </SectionDesc>
        <SectionDesc className="mb-1  font-normal text-muted">
          Bachelor of Applied Science (BASC), Electrical Engineering
        </SectionDesc>
        <SectionDesc className="mb-1  font-light text-muted">
          Vancouver, Canada
        </SectionDesc>
        <SectionDesc className="mb-1  font-light text-muted">
          May 2023
        </SectionDesc>
      </Section>

      {/* Extracurricular  */}
      <Section>
        <SectionHeader>Extracurricular Experience</SectionHeader>
        {extraExperienceItems.map((item, index) => {
          return (
            <ExperienceItem
              key={item.title}
              title={item.title}
              companyUrl={item.companyUrl}
              timePeriod={item.timePeriod}
              jobLocation={item.jobLocation}
              jobType={item.jobType}
              bulletPoints={item.bulletPoints}
            />
          );
        })}
      </Section>

      {/* Awards  */}
      <Section>
        <SectionHeader>Awards</SectionHeader>

        {awardItems.map((item, index) => {
          return (
            <AwardItem
              key={item.title}
              title={item.title}
              issuer={item.issuer}
              awardUrl={item.awardUrl}
              desc={item.desc}
            />
          );
        })}
      </Section>

      {/* Features  */}
      <Section>
        <SectionHeader>Features</SectionHeader>
        {featureItems.map((feature) => {
          return (
            <SectionDesc key={feature.link} className="mb-2  font-normal text-muted">
              <a
                href={
                  feature.link
                }
                target="_blank"
                rel="noreferrer"
                className="decoration-muted underline-offset-4 hover:underline"
              >
                {feature.title} <ArrowUpRight className="inline-block h-3 w-3" />
              </a>
            </SectionDesc>
          );
        })}
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
        <ContactLink
          linkDesc="LinkedIn"
          urlLink="https://www.linkedin.com/in/mathewbushuru/"
          shownLink="mathewbushuru"
        />
      </Section>
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <h4 className="mb-4 w-full md:w-[640px] 2xl:w-[960px]">{children}</h4>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-medium leading-8 tracking-wide sm:mb-1 sm:text-base sm:leading-7">
      {children}
    </h4>
  );
}

function SectionDesc({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "text-xs font-light leading-5 tracking-wide text-muted sm:text-sm",
        className
      )}
    >
      {children}
    </h4>
  );
}

function ExperienceItem({
  title,
  companyUrl,
  timePeriod,
  jobType,
  jobLocation,
  bulletPoints,
}: {
  title: string;
  companyUrl: string;
  timePeriod: string;
  jobType: string | null;
  jobLocation: string;
  bulletPoints: string[];
}) {
  return (
    <div className="mb-2">
      <SectionDesc className="mb-1  font-normal text-foreground">
        <a
          href={companyUrl}
          target="_blank"
          rel="noreferrer"
          className="decoration-muted underline-offset-4 hover:underline"
        >
          {title} <ArrowUpRight className="inline-block h-3 w-3" />
        </a>
      </SectionDesc>
      <SectionDesc className="sm:mb-1">{timePeriod}</SectionDesc>
      <SectionDesc className="mb-2 text-foreground sm:text-xs">
        {jobType} {jobType && "|"} {jobLocation}
      </SectionDesc>
      {bulletPoints.map((item, index) => {
        return (
          <SectionDesc
            className="mb-2 tracking-wider sm:tracking-wide"
            key={index}
          >
            {item}
          </SectionDesc>
        );
      })}
    </div>
  );
}

function AwardItem({
  title,
  awardUrl,
  issuer,
  desc,
}: {
  title: string;
  awardUrl: string;
  issuer: string;
  desc: string;
}) {
  return (
    <div className="mb-2">
      <SectionDesc className="mb-1  font-normal text-foreground">
        {title}
      </SectionDesc>
      <SectionDesc className="mb-1  font-normal text-muted">
        <a
          href={awardUrl}
          target="_blank"
          rel="noreferrer"
          className="decoration-muted underline-offset-4 hover:underline"
        >
          {issuer} <ArrowUpRight className="inline-block h-3 w-3" />
        </a>
      </SectionDesc>
      <SectionDesc className="mb-2">{desc}</SectionDesc>
    </div>
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
    <div className="flex items-center gap-2 text-xs font-light leading-5 tracking-wider text-foreground sm:mb-0.5 sm:text-sm">
      <span className="text-xs  text-muted sm:text-sm">{linkDesc}: </span>
      <a
        href={urlLink}
        target="_blank"
        rel="noreferrer"
        className="decoration-muted underline-offset-4 hover:underline"
      >
        <span className="flex items-center gap-1">
          {shownLink}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </a>
    </div>
  );
}
