import { H6 } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const NavItems = ["Home", "Projects", "Resume", "Docs"];

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<NavProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      {NavItems.map((item, index) => {
        return <NavItem key={index}>{item}</NavItem>;
      })}
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
