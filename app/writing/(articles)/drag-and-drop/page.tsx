import { CalendarDaysIcon } from "lucide-react";

export const metadata = {
  title: "Mathew Bushuru | Blog - Drag and Drop",
};

const _blogMetadata = {
  published: false,
  publishDate: null,
  startedWorkingOnDate: "06/17/2024",
  lastModifiedDate: "06/17/2024",
};

export default function ArticleContentPage() {
  return (
    <>
      <div className="p-4 pb-8">
        <h3 className="mb-1 text-xl font-semibold sm:text-2xl lg:mb-2">
          Drag and Drop Applications using Server and Backend as Source of Truth
        </h3>
        <div className="mb-1 flex items-center text-sm text-muted-foreground/75 lg:mb-2">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          June 17, 2024
        </div>

        <div className="flex flex-col gap-2 leading-7 lg:gap-4">
          <p>
            In a typical drag and drop application, each draggable item stores
            information about its position in the list. When the item, is
            dragged, this information changes. A challenge that arises when
            working with such system is figuring out the best way to store this
            information in a database in an efficient way
          </p>
        </div>
      </div>
    </>
  );
}
