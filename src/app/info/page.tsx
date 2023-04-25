import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Mathew Bushuru | Info",
};

const workExperienceItems = [
  {
    title: "Software Engineering Intern at Immersio.io",
    companyUrl: "https://immersio.io/",
    timePeriod: "05 / 2022 - 07 / 2022",
    jobLocation: "Vancouver, Canada",
    jobType: "Internship, Remote",
    bulletPoints: [
      "Integrated a web application for instructors that I had developed as part of my degree's capstone project into the company's existing codebase.",
      "Implemented chat functionality in the app to support real-time  collaboration of multiple instructors working on a single course, and integrated a chatbot into the app powered by an NLP machine learning model.",
    ],
  },
  {
    title: "Machine Learning Intern at Cellulant",
    companyUrl: "https://www.cellulant.io/",
    timePeriod: "07 / 2019 - 09 / 2019",
    jobLocation: "Nairobi, Kenya",
    jobType: "Internship, In person",
    bulletPoints: [
      "Built a recommender system using the Surprise Python Library to personalize the company's app for each user.",
      "Utilized  predictive data models and machine learning techniques to increase the customer retention rate from 47% to 64%. Successfully deployed a machine learning model on AWS to 2 million customers, providing  targeted phone airtime bonuses to customers identified as being at risk of churning within the next 30 days.",
    ],
  },
];

const extraExperienceItems = [
  {
    title: "Frontend Software Developer at UBC Launchpad / BC Cancer Agency",
    companyUrl: "https://ubclaunchpad.com/",
    timePeriod: "09 / 2022 - 04 / 2023",
    jobLocation: "Vancouver, Canada",
    jobType: null,
    bulletPoints: [
      "Contributed to the development of a lab management web application. ",
      "Implemented a Kanban-style ticket management board with drag and drop capabilities, a PDF  invoice generation tool, form builder components among other features.",
    ],
  },
  {
    title: "Capstone Project (CPEN491) at UBC ECE / Immersio Inc",
    companyUrl: "https://ece.ubc.ca/",
    timePeriod: "09 / 2021 - 04 / 2022",
    jobLocation: "Vancouver, Canada",
    jobType: null,
    bulletPoints: [
      "Developed a full-stack React web application featuring intuitive course creation tools for language instructors, utilizing NextJS for the frontend, Express for the server-side logic and MongoDB for the database ",
    ],
  },
  {
    title: "Fullstack Software Developer at UBC Launchpad",
    companyUrl: "https://ubclaunchpad.com/",
    timePeriod: "09 / 2021 - 04 / 2022",
    jobLocation: "Vancouver, Canada",
    jobType: null,
    bulletPoints: [
      "Contributed to the development of a React Native app to help students manage their finances more effectively. ",
      "Implemented a feature allowing users to automatically scan  receipts and add expenses using their phone's camera and machine learning/computer vision.",
    ],
  },
  {
    title: "Control Engineer at UBC Sailbot",
    companyUrl: "https://www.ubcsailbot.org/",
    timePeriod: "08 / 2018 - 12 / 2019",
    jobLocation: "Vancouver, Canada",
    jobType: null,
    bulletPoints: [
      "Contributed to the creation and testing of a robust control system to autonomously control a robotic sailboat. ",
      "Presented research findings at the 2019  Multidisciplinary Undergraduate Research Conference through a poster presentation",
    ],
  },
];

export default function InfoPage() {
  return (
    <div className="scrollbar-hide flex h-full flex-col items-end gap-1  overflow-y-auto pb-8 pr-3 pt-32 sm:gap-2 sm:pr-40 sm:pt-40">
      {/* About  */}
      <Section>
        <SectionHeader>About</SectionHeader>
        <SectionDesc>
          I'm Mathew and I enjoy building polished user experiences.
        </SectionDesc>
      </Section>

      {/* Currently */}
      <Section>
        <SectionHeader>Currently</SectionHeader>
        <ExperienceItem
          title="Software Developer / Maintainer at BC Cancer Agency"
          companyUrl="http://www.bccancer.bc.ca/"
          timePeriod="05 / 2023 - Present"
          jobLocation="Vancouver, Canada"
          jobType="Volunteer, Remote"
          bulletPoints={[
            "Maintaining and developing a lab management web application to streamline ticket submission, tracking and invoicing processes.",
          ]}
        />
      </Section>

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
          <span className="text-muted">
            JavaScript, Python, Java, TypeScript, C, CSS, HTML (in descending
            order).
          </span>
        </SectionDesc>
        <SectionDesc className="mb-1  font-normal text-foreground">
          <span>Tools and Frameworks :</span>{" "}
          <span className="text-muted">
            ReactJS, NextJS, React Native, TailwindCSS, NodeJS / ExpressJS,
            MongoDB, MySQL / PlanetScale, Git, AWS, Firebase.
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
        <SectionDesc className="mb-1  font-normal text-muted">
          Vancouver, Canada
        </SectionDesc>
        <SectionDesc className="mb-1  font-normal text-muted">
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
  return <h4 className="mb-4 w-full md:w-[640px]">{children}</h4>;
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
          <SectionDesc className="mb-2" key={index}>
            {item}
          </SectionDesc>
        );
      })}
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
