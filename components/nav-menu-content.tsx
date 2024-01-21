import Link from "next/link";
import {
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

import { ThemeToggleButton } from "./theme-toggle-button";
import { Button } from "@/components/ui/button";

export const NavMenuContent = () => {
  return (
    <div className="flex flex-col justify-between h-full">
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
  );
};
