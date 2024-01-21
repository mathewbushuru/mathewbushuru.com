import { CommandIcon } from "lucide-react";

import { ThemeToggleIcon } from "@/components/theme-toggle-icon";

export const MobileNavbar = () => {
  return (
    <nav className="z-50 flex h-14  items-center justify-between border-b bg-background px-4 py-4">
      <CommandIcon className="h-5 w-5" />
      <ThemeToggleIcon />
    </nav>
  );
};
