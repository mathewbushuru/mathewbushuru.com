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
        return (
          <NavItem key={index} isActive={item === "Home"}>
            {item}
          </NavItem>
        );
      })}
      <Button size="sm" variant={"outline"} className="mt-2 rounded-lg  px-2">
        <LinkedinIcon className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="sm" className="rounded-lg px-2">
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
    return <div className="h-2 w-2 bg-foreground rounded-full my-1" />;
  }
  return (
    // <H6 className="text-sm font-normal tracking-wide sm:text-base">
    //   {children}
    // </H6>
    <Button variant={"link"} size="sm" className="px-0 h-auto tracking-wide sm:text-base">{children}</Button>
  );
}

export default Nav;
