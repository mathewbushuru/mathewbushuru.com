"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkedinIcon, GithubIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NavItems = ["home", "info", "projects", "writing"];

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<NavProps> = ({ className, ...props }) => {
  const pathname = usePathname();
  let currentLocation = pathname.split("/")[1];
  if (pathname === "/") currentLocation = "home";

  return (
    <div
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    >
      {NavItems.map((item, index) => {
        return (
          <NavItem
            key={index}
            isActive={item === currentLocation}
            item={item}
          />
        );
      })}
      <a
        href="https://www.linkedin.com/in/mathewbushuru/"
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 hover:underline"
      >
        <Button
          size="sm"
          variant={"outline"}
          className="mt-2 rounded-lg  px-2"
          aria-label="LinkedIn Link"
        >
          <LinkedinIcon className="h-5 w-5" />
        </Button>
      </a>
      <a
        href="https://github.com/mathewbushuru"
        target="_blank"
        rel="noreferrer"
        className="underline-offset-4 hover:underline"
      >
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg px-2"
          aria-label="Github Link"
        >
          <GithubIcon className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

function NavItem({ item, isActive }: { item: string; isActive: boolean }) {
  if (isActive) {
    return <div className="my-1 h-2 w-2 rounded-full bg-foreground" />;
  }
  return (
    <Link href={`/${item === "home" ? "/" : item}`}>
      <Button
        variant={"link"}
        size="sm"
        className="h-auto px-0 capitalize font-normal tracking-wide sm:text-base"
      >
        {item}
      </Button>
    </Link>
  );
}

export default Nav;
