import Link from "next/link";
import {
  CommandIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  HammerIcon,
  NewspaperIcon,
  CameraIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

import { ThemeToggleIcon } from "@/components/theme-toggle-icon";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

export default function HomePage() {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* sidebar  */}
      <div className="hidden flex-col justify-between shadow-lg dark:border-r lg:flex">
        {/* Top sidebar  */}
        <div className=" flex min-w-60 flex-col gap-3 px-4 pt-6">
          <div className="mb-2 flex cursor-pointer flex-col gap-1 rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">
            <span className="">Mathew Bushuru</span>
            <span className="font-light text-muted-foreground">
              Software Engineer
            </span>
          </div>
          <Link href="/">
            <Button className="w-full justify-start" size="sm">
              <SparklesIcon className="mr-2 h-4 w-4" />
              <span>Home</span>
              <span className="ml-auto rounded-sm border bg-secondary px-1.5 text-muted-foreground">
                1
              </span>
            </Button>
          </Link>
          <Link href="/journey">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <NavigationIcon className="mr-2 h-4 w-4" />
              <span>Journey</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                2
              </span>
            </Button>
          </Link>
          <Link href="/reading">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <NewspaperIcon className="mr-2 h-4 w-4" />
              <span>Reading</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                3
              </span>
            </Button>
          </Link>
          <Link href="/writing">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <PencilLineIcon className="mr-2 h-4 w-4" />
              <span>Writing</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                4
              </span>
            </Button>
          </Link>
          <Link href="/shooting">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <CameraIcon className="mr-2 h-4 w-4" />
              <span>Shooting</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                5
              </span>
            </Button>
          </Link>
          <Link href="/all-projects">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <HammerIcon className="mr-2 h-4 w-4" />
              <span>All projects</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                6
              </span>
            </Button>
          </Link>
          <Link href="/more-about-me">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <Wand2Icon className="mr-2 h-4 w-4" />
              <span>More about me</span>
              <span className="ml-auto rounded-sm border bg-accent px-1.5 text-muted-foreground">
                7
              </span>
            </Button>
          </Link>
        </div>

        {/* Bottom sidebar  */}
        <div className="flex min-w-60 flex-col gap-3 px-4 pb-6 pt-8">
          <a
            href="https://github.com/mathewbushuru"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <GithubIcon className="mr-2 h-4 w-4" />
              <span>GitHub</span>
              <ArrowUpRightIcon className="ml-auto mr-1.5 h-4 w-4" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/mathewbushuru/"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <LinkedinIcon className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
              <ArrowUpRightIcon className="ml-auto mr-1.5 h-4 w-4" />
            </Button>
          </a>
          <a
            href="mailto:mathewbushuru@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <Button variant="ghost" className="w-full justify-start" size="sm">
              <MailIcon className="mr-2 h-4 w-4" />
              <span>Email</span>
              <ArrowUpRightIcon className="ml-auto mr-1.5 h-4 w-4" />
            </Button>
          </a>
          <hr className="-mx-4" />
          <ThemeToggleButton />
        </div>
      </div>

      {/* Content  */}
      <div className="overflow-scroll lg:px-8">
        {/* mobile navbar  */}
        <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b bg-background px-4 py-4 lg:hidden">
          <CommandIcon className="h-5 w-5" />
          <ThemeToggleIcon />
        </nav>

        {/* Intro  */}
        <div className="px-5 pb-4 pt-16 lg:pt-28">
          <h1 className="mb-6 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
            Home
          </h1>

          <p className="mb-6 leading-7">
            Hello 👋 I'm Mathew Bushuru, a software engineer based in Vancouver,
            Canada. My interests span a broad variety of subjects, encompassing
            algorithm design, electronics, education, web and mobile
            development.
          </p>

          <p className="mb-6 leading-7">
            I am currently working on Point of Sales systems at the head office
            of Choices Markets which is a division of{" "}
            <a
              href="https://pattisonfoodgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Pattison Food Group
            </a>
            . Previously, I have worked on a React Native mobile app for{" "}
            <a
              href="https://www.linkedin.com/company/getamelia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Amelia
            </a>
            , built a web-based lab management system for the Molecular and
            Advanced Pathology Core (MAPCore) lab at{" "}
            <a
              href="https://www.bccrc.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              BC Cancer
            </a>
            , and worked on a machine learning recommender system at{" "}
            <a
              href="https://www.cellulant.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Cellulant
            </a>
            .
          </p>

          <p className="leading-7">
            I am always open to working on new project ideas so please feel free
            to connect with me.
          </p>
        </div>

        {/* Favorite projects  */}
        <div className="px-5 py-4">
          <h1 className="mb-6 text-xl font-semibold sm:text-2xl">
            Favourite Projects
          </h1>
          <Table>
            <TableCaption>See more in the Journey page</TableCaption>
            <TableHeader>
              <TableRow className="hover:bg-background">
                <TableHead className="pl-2 text-left lg:min-w-32">
                  Name
                </TableHead>
                <TableHead className="pl-2 text-left">Description</TableHead>
                <TableHead className="pl-2 text-left lg:min-w-36">
                  Links
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {favoriteProjects.map((project, index) => (
                <TableRow key={index} className="hover:bg-background">
                  <TableCell className="pl-2 text-left align-top">
                    {project.name}
                  </TableCell>
                  <TableCell className="pl-2 text-left align-top">
                    {project.description}
                  </TableCell>
                  <TableCell className="pl-2 text-left align-top">
                    {project.websiteLink && (
                      <>
                        <a
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link hover:underline hover:underline-offset-4"
                        >
                          Website
                        </a>
                        <span>, </span>
                      </>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:underline hover:underline-offset-4"
                      >
                        Github
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}

const favoriteProjects = [
  {
    name: "Design System",
    description: "My Personal design system",
    websiteLink: "https://design.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/design-system",
  },
  {
    name: "Todoist Monorepo",
    description:
      "A production ready application template built with React, React Native, TypeScript, Express and MySQL in a monorepo powered by Turborepo (Todoist clone).",
    websiteLink: "https://todoist.mathewbushuru.com/",
    githubLink: "https://github.com/mathewbushuru/todoist-monorepo",
  },
  {
    name: "Algorithms",
    description:
      "Repository of computer science algorithms and data structures implemented in JavaScript, Java, C++, Python, TypeScript and C.",
    websiteLink: null,
    githubLink: "https://github.com/mathewbushuru/algorithms",
  },
  {
    name: "Soma Offline",
    description:
      "An EdTech company providing access to educational resources to communities with limited or no internet access",
    websiteLink: "https://www.somaoffline.com/",
    githubLink: "https://github.com/soma-offline",
  },
  {
    name: "ProSearchX",
    description:
      "A wrapper around Google Search with additional features to make it more effective and powerful.",
    websiteLink: "https://pro-search-x.vercel.app/",
    githubLink: "https://github.com/mathewbushuru/ProSearchX",
  },
];
