import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { keysUsedInNavigation } from "@/lib/constants";

export function useKeyPress() {
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const keypressHandler = (event: KeyboardEvent) => {
      // e.g. I still want Tab + Enter keyboard navigation on the website
      if (!keysUsedInNavigation.includes(event.code)) {
        return;
      }

      event.preventDefault();

      if (event.code === "Digit1") {
        router.push("/");
      } else if (event.code === "Digit2") {
        router.push("/reading");
      }  else if (event.code === "Digit3") {
        router.push("/shooting");
      } else if (event.code === "Digit4") {
        router.push("/all-projects");
      } else if (event.code === "Digit5") {
        router.push("/more-about-me");
      } else if (event.code === "KeyG") {
        window.open("https://github.com/mathewbushuru", "_blank");
      } else if (event.code === "KeyE") {
        window.open("mailto:mathewbushuru@proton.me", "_blank");
      } else if (event.code === "KeyL") {
        window.open("https://www.linkedin.com/in/mathewbushuru/", "_blank");
      } else if (event.code === "KeyD") {
        setTheme("dark");
      } else if (event.code === "KeyT") {
        setTheme("light");
      }
    };

    window.addEventListener("keydown", keypressHandler);

    return () => {
      window.removeEventListener("keydown", keypressHandler);
    };
  }, []);
}
