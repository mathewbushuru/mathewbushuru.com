import { LinkedinIcon, GithubIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NavItems = ["Home", "Projects", "Resume", "Docs", "Thoughts"];

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<NavProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    >
      {NavItems.map((item, index) => {
        return (
          <NavItem key={index} isActive={item === "Home"}>
            {item}
          </NavItem>
        );
      })}
      <Button
        size="sm"
        variant={"outline"}
        className="mt-2 rounded-lg  px-2"
        aria-label="LinkedIn Link"
      >
        <LinkedinIcon className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-lg px-2"
        aria-label="Github Link"
      >
        <GithubIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

function NavItem({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  if (isActive) {
    return <div className="my-1 h-2 w-2 rounded-full bg-foreground" />;
  }
  return (
    <Button
      variant={"link"}
      size="sm"
      className="h-auto px-0 tracking-wide sm:text-base"
    >
      {children}
    </Button>
  );
}

export default Nav;
