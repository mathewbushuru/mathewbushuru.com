import Image from "next/image";
import { CalendarIcon, PlayIcon, GithubIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { projectsData } from "./projectspageData";
import WhyModal from "./WhyModal";

export const metadata = {
  title: "Mathew Bushuru | Projects",
};

export default function ProjectsPage() {
  return (
    <div className="scrollbar-hide h-full overflow-y-auto pb-8 pr-3 pt-32 sm:gap-2 sm:pr-6 sm:pt-40 md:pr-6 2xl:pr-60">
      <div className="grid grid-cols-1 justify-items-end gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project, index) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              imgSrc={project.imgSrc}
              dates={project.dates}
              desc={project.desc}
              techList={project.techList}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
              why={project.why}
              priorityImg={index < 6}
            />
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({
  name,
  imgSrc,
  dates,
  desc,
  techList,
  demoUrl,
  codeUrl,
  why,
  priorityImg,
}: {
  name: string;
  imgSrc: string;
  dates: string;
  desc: string;
  techList: string[];
  demoUrl: string | null;
  codeUrl: string | null;
  why: { what: string; why: String; lesson: string } | null;
  priorityImg: boolean;
}) {
  return (
    <div className="h-76 flex flex-col overflow-hidden rounded-md bg-background-popover pt-3 shadow-md sm:w-72 md:w-80">
      <Image
        src={imgSrc}
        width={320}
        height={160}
        alt={name}
        className="max-h-40 object-contain"
        priority={priorityImg}
      />
      <ProjectName className="pl-2 pt-2">{name}</ProjectName>
      <ProjectDates>
        <CalendarIcon className="h-3 w-3" />
        {dates}
      </ProjectDates>
      <ProjectDesc className="mb-3 px-2 pt-2">{desc}</ProjectDesc>
      <div className="mb-3 flex flex-wrap gap-2 px-2">
        {techList.map((item) => {
          return <TechCard key={item}>{item}</TechCard>;
        })}
      </div>
      <div className="sm_gap-3 mb-3 flex gap-2 px-2">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="">
            <Button
              variant="outline"
              size="sm"
              className="flex h-7 items-center gap-1 rounded-sm border-accent font-normal text-muted hover:bg-accent hover:text-foreground sm:gap-2"
            >
              <PlayIcon className="inline-block h-3 w-3" />
              Demo
            </Button>
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noreferrer" className="">
            <Button
              variant="outline"
              size="sm"
              className="flex h-7 items-center gap-1 rounded-sm border-accent font-normal text-muted hover:bg-accent hover:text-foreground sm:gap-2"
            >
              <GithubIcon className="inline-block h-3 w-3" />
              Source
            </Button>
          </a>
        )}
      </div>
      {demoUrl && why !== null && (
        <div className="mb-3">
          <WhyModal data={why} title={name} demoUrl={demoUrl} />
        </div>
      )}
    </div>
  );
}

function ProjectName({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "text-sm font-medium leading-4 tracking-wide sm:mb-1",
        className
      )}
    >
      {children}
    </h4>
  );
}

function ProjectDates({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-1 pl-2 pt-1 text-xs text-muted sm:gap-2">
      {children}
    </div>
  );
}

function ProjectDesc({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        " text-xs font-light leading-5 tracking-wide text-foreground sm:text-sm lg:min-h-[68px]",
        className
      )}
    >
      {children}
    </h4>
  );
}

function TechCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        " rounded-sm bg-accent p-0.5 text-xs font-light leading-5 tracking-wide text-foreground  sm:p-1 ",
        className
      )}
    >
      {children}
    </div>
  );
}
