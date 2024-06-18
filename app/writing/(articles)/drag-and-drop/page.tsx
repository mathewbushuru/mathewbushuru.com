import { CalendarDaysIcon } from "lucide-react";

export const metadata = {
  title: "Mathew Bushuru | Blog - Drag and Drop",
};

const _blogMetadata = {
  published: false,
  publishDate: null,
  startedWorkingOnDate: "06/17/2024",
  lastModifiedDate: "06/18/2024",
};

export default function ArticleContentPage() {
  return (
    <>
      <div className="p-4 pb-8">
        <h3 className="mb-1 text-xl font-semibold sm:text-2xl lg:mb-2">
          Drag and Drop Applications using Database as Source of Truth
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
            working with such systems is figuring out the best way to store this
            information in a database in an efficient way. In this article, we
            will explore the different ways to handle this starting from a
            completely clientside approach then introducing a server and
            database to persist the drag information.
          </p>

          <h5 className="mb-1 text-lg font-semibold sm:text-xl lg:mb-2">
            Fully clientside approach
          </h5>

          <p>
            This is a React application using{" "}
            <a
              href="https://github.com/atlassian/pragmatic-drag-and-drop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pragmatic Drag and Drop
            </a>{" "}
            from Atlassian. This is the React library powering drag and drop in
            Trello, Jira and Confluence today. The example we'll be creating
            here is a chess board with only a king and a pawn. The goal is to be
            able to drag the pieces across the cells in the board.
          </p>
        </div>
      </div>
    </>
  );
}
