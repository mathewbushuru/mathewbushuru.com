import { LinkedinIcon, GithubIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { H6 } from "@/components/ui/Typography";
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
        return <NavItem key={index}>{item}</NavItem>;
      })}
      <Button size="sm" variant={"outline"} className="rounded-lg px-2  mt-2">
        <LinkedinIcon className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="sm" className="rounded-lg px-2">
        <GithubIcon className="h-5 w-5" />
      </Button>
    </div>
  );
};

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <H6 className="text-sm font-normal tracking-wide sm:text-base">
      {children}
    </H6>
  );
}

export default Nav;
