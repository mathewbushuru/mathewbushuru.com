import Link from "next/link";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CommandIcon,
} from "lucide-react";

import { ThemeToggleIcon } from "@/components/theme-toggle-icon";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { NavigationButton } from "@/components/navigation-button";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

export const MobileNavbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between border-b bg-background px-4 py-4">
      <Drawer>
        <DrawerTrigger asChild>
          <CommandIcon className="h-5 w-5 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="max-h-[28rem] overflow-y-scroll">
            <div className="flex h-full flex-col justify-between">
              {/* Top  */}
              <div className=" flex min-w-60 flex-col gap-3 px-4 pt-6">
                <Link href="/">
                  <div className="mb-2 flex cursor-pointer flex-col gap-1 rounded-md px-4 py-2 text-sm font-medium hover:bg-accent">
                    <span className="">Mathew Bushuru</span>
                    <span className="font-light text-muted-foreground">
                      Software Engineer
                    </span>
                  </div>
                </Link>
                <DrawerClose asChild>
                  <Link href="/">
                    <NavigationButton label="Home" keyboardShortcut={1} />
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/reading">
                    <NavigationButton label="Reading" keyboardShortcut={2} />
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/writing">
                    <NavigationButton label="Writing" keyboardShortcut={3} />
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/shooting">
                    <NavigationButton label="Shooting" keyboardShortcut={4} />
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/all-projects">
                    <NavigationButton
                      label="All projects"
                      keyboardShortcut={5}
                    />
                  </Link>
                </DrawerClose>
                <DrawerClose asChild>
                  <Link href="/more-about-me">
                    <NavigationButton
                      label="More about me"
                      keyboardShortcut={6}
                    />
                  </Link>
                </DrawerClose>
              </div>

              {/* Bottom  */}
              <div className="flex min-w-60 flex-col gap-3 px-4 pb-6 pt-8">
                <a
                  href="https://github.com/mathewbushuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
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
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
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
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRightIcon className="ml-auto mr-1.5 h-4 w-4" />
                  </Button>
                </a>
                <hr className="-mx-4" />
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <ThemeToggleIcon />
    </nav>
  );
};
