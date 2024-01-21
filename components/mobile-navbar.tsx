import { CommandIcon } from "lucide-react";

import { ThemeToggleIcon } from "@/components/theme-toggle-icon";
import { NavMenuContent } from "./nav-menu-content";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

export const MobileNavbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between border-b bg-background px-4 py-4">
      <Drawer>
        <DrawerTrigger asChild>
          <CommandIcon className="h-5 w-5 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent>
          <div className="max-h-[32rem] overflow-y-scroll">
            <NavMenuContent />
          </div>
        </DrawerContent>
      </Drawer>
      <ThemeToggleIcon />
    </nav>
  );
};
