import Link from "next/link";
import { CalendarDaysIcon } from "lucide-react";

export const metadata = {
  title: "Mathew Bushuru | Blog",
};

export default function WritingPage() {
  return (
    <div>
      <h1 className="mb-4 mt-3 text-xl font-semibold sm:text-2xl lg:hidden">
        Writing
      </h1>

      <div className="flex flex-col gap-1">
        <Link href="/writing/drag-and-drop">
          <div className="group rounded-sm py-4 transition-all duration-300 sm:hover:cursor-pointer sm:hover:bg-popover sm:hover:px-4 sm:hover:shadow-md">
            <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
              Full-Stack Drag and Drop Applications, and Chess.
            </h3>
            <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground group-hover:text-foreground lg:mb-2">
              In a typical drag and drop application, each draggable item stores
              information about its position in the list. When the item is
              dragged, this information changes. A challenge that arises when
              working with such systems is figuring out the best way to store
              this information in the database in an efficient way. In this
              article, we will explore the different ways to handle this
              starting from a completely clientside approach then introducing a
              server and database to persist the drag information.
            </p>
            <div className="flex items-center text-sm text-muted-foreground/75">
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              Jul 03, 2024
            </div>
          </div>
        </Link>

        <Link href="/writing/soma">
          <div className="group rounded-sm py-4 transition-all duration-300 sm:hover:cursor-pointer sm:hover:bg-popover sm:hover:px-4 sm:hover:shadow-md">
            <h3 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
              Soma
            </h3>
            <p className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap text-muted-foreground group-hover:text-foreground lg:mb-2">
              A few weeks ago, I was talking to one of my friends about a social
              venture that I have spent most of this year working on. He wanted
              to know what we do and I told him that we provide online
              educational content like Wikipedia and Khan Academy to students in
              high schools but offline. His next question is what led me to
              write this medium post. The question was: “What is the point of
              that? Nowadays, everyone is online 24/7 anyway.”
            </p>
            <div className="flex items-center text-sm text-muted-foreground/75">
              <CalendarDaysIcon className="mr-2 h-4 w-4" />
              Jul 24, 2019
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
