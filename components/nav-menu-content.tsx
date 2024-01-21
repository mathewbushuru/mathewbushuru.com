import Link from "next/link";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { NavigationButton } from "@/components/navigation-button";
import { Button } from "@/components/ui/button";

export const NavMenuContent = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      {/* Top sidebar  */}
      <div className=" flex min-w-60 flex-col gap-3 px-4 pt-6">
        <Link href="/">
          <div className="mb-2 flex cursor-pointer flex-col gap-1 rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">
            <span className="">Mathew Bushuru</span>
            <span className="font-light text-muted-foreground">
              Software Engineer
            </span>
          </div>
        </Link>
        <Link href="/">
          <NavigationButton label="Home" keyboardShortcut={1} />
        </Link>
        <Link href="/reading">
          <NavigationButton label="Reading" keyboardShortcut={2} />
        </Link>
        <Link href="/writing">
          <NavigationButton label="Writing" keyboardShortcut={3} />
        </Link>
        <Link href="/shooting">
          <NavigationButton label="Shooting" keyboardShortcut={4} />
        </Link>
        <Link href="/all-projects">
          <NavigationButton label="All projects" keyboardShortcut={5} />
        </Link>
        <Link href="/more-about-me">
          <NavigationButton label="More about me" keyboardShortcut={6} />
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
        <hr className="-mx-4" />
        <ThemeToggleButton />
      </div>
    </div>
  );
};
