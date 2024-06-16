import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";

export const FeaturedArticlesList = () => {
  return (
    <>
      <Link href="/writing/soma">
        <div className="group rounded-sm py-4 transition-all duration-300 hover:cursor-pointer hover:bg-popover hover:px-4 hover:shadow-md">
          <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
            Soma
          </h3>
          <p className="mb-1 text-muted-foreground group-hover:text-foreground lg:mb-2">
            A few weeks ago, I was talking to one of my friends about a social
            venture that I have spent most of this year working on. He wanted
            to...
          </p>
          <div className="flex items-center text-sm text-muted-foreground/75">
            <CalendarDaysIcon className="mr-2 h-4 w-4" />
            Jul 24, 2019
          </div>
        </div>
      </Link>
    </>
  );
};
