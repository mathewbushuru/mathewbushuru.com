import Image from "next/image";
import { CalendarDaysIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Mathew Bushuru | Blog - Drag and Drop",
};

const blogMetadata = {
  published: false,
  publishDate: "June 22, 2024",
  startedWorkingOnDate: "June 17, 2024",
  lastModifiedDate: "June 22, 2024",
};

export default function ArticleContentPage() {
  return (
    <>
      <div className="p-4 pb-8">
        <h3 className="mb-1 text-xl font-semibold sm:text-2xl lg:mb-2">
          Full-Stack Drag and Drop Applications, and Chess.
        </h3>
        <div className="mb-1 flex items-center text-sm text-muted-foreground/75 lg:mb-2">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          {blogMetadata.publishDate}
        </div>

        <div className="flex flex-col gap-2 leading-7 lg:gap-4">
          <p>
            In a typical drag and drop application, each draggable item stores
            information about its position in the list. When the item is
            dragged, this information changes. A challenge that arises when
            working with such systems is figuring out the best way to store this
            information in the database in an efficient way. In this article, we
            will explore the different ways to handle this starting from a
            completely clientside approach then introducing a server and
            database to persist the drag information.
          </p>

          <h5 className="mb-0.5 text-lg font-semibold sm:text-xl lg:mb-1">
            Clientside Implementation
          </h5>

          <p>
            To serve as an example, we will be building a Chess application
            using React that will allow the player to drag pieces across the
            board. We'll be using TailwindCSS for styling. The starting code is
            shown below:
          </p>

          <Tabs defaultValue="App.tsx" key={1}>
            <TabsList>
              <TabsTrigger value="App.tsx">App.tsx</TabsTrigger>
              <TabsTrigger value="chessboard.tsx">
                components/chessboard.tsx
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="App.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`import Chessboard from "@/components/chessboard";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`export default function App() {`}</CodeLine>
                <CodeLine inset={1}>{`return (`}</CodeLine>
                <CodeLine inset={2}>{`<div>`}</CodeLine>
                <CodeLine inset={3}>{`<Chessboard />`}</CodeLine>
                <CodeLine inset={2}>{`</div>`}</CodeLine>
                <CodeLine inset={1}>{`);`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`export default function Chessboard() {`}</CodeLine>
                <CodeLine inset={1}>{`return <>Chessboard</>;`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            We will then create a helper function that renders all the 64
            squares of the chessboard. This function is called by the Chessboard
            component to create all the square components that are then rendered
            on a 500px by 500px grid (320px by 320px on mobile).
          </p>

          <Tabs defaultValue="chessboard.tsx" key={2}>
            <TabsList>
              <TabsTrigger value="App.tsx">App.tsx</TabsTrigger>
              <TabsTrigger value="chessboard.tsx">
                components/chessboard.tsx
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="App.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine notChanged>
                  import Chessboard from "@/components/chessboard";
                </CodeLine>
                <CodeLine notChanged />
                <CodeLine notChanged>
                  {`export default function App() {`}
                </CodeLine>
                <CodeLine inset={1} notChanged>{`return  (`}</CodeLine>
                <CodeLine inset={2}>
                  {`<div className="py-20 flex justify-center">`}
                </CodeLine>
                <CodeLine inset={3} notChanged>{`<Chessboard />`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`function renderSquares() {`}</CodeLine>
                <CodeLine inset={1}>{`const squares = [];`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>
                  {`for (let row = 0; row < 8; row++) {`}
                </CodeLine>
                <CodeLine inset={2}>
                  {`for (let col = 0; col < 8; col++) {`}
                </CodeLine>
                <CodeLine inset={3}>{`squares.push(`}</CodeLine>
                <CodeLine inset={4}>
                  {'<div className="text-xs" key={`${row}${col}`}>'}
                </CodeLine>
                <CodeLine inset={5}>{"{row},{col}"}</CodeLine>
                <CodeLine inset={4}>{"</div>"}</CodeLine>
                <CodeLine inset={3}>{");"}</CodeLine>
                <CodeLine inset={2}>{"}"}</CodeLine>
                <CodeLine inset={1}>{"}"}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{"return squares;"}</CodeLine>
                <CodeLine>{"}"}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export default function Chessboard() {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`const boardSquares = renderSquares();`}</CodeLine>
                <CodeLine inset={1}>{`return (`}</CodeLine>
                <CodeLine inset={2}>
                  {`<div className="grid h-80 w-80 grid-cols-8 grid-rows-8 sm:h-[500px] sm:w-[500px]">`}
                </CodeLine>
                <CodeLine inset={3}>{`{boardSquares}`}</CodeLine>
                <CodeLine inset={2}>{`</div>`}</CodeLine>
                <CodeLine inset={1}>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>After adding this, this is how the app looks like:</p>

          <Image
            src="/writing/drag-and-drop/progress-1.jpg"
            alt="Chessboard  at start"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>
            Next we will add altenating dark and light squares to the
            chessboard. We will be using a helper function called{" "}
            <code>cn</code> that uses Tailwind-merge and Clsx to conditionally
            apply tailwind classes when the square is dark.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={3}>
            <TabsList>
              <TabsTrigger value="App.tsx">App.tsx</TabsTrigger>
              <TabsTrigger value="utils.tsx">lib/utils.tsx</TabsTrigger>
              <TabsTrigger value="chessboard.tsx">
                components/chessboard.tsx
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="App.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine notChanged>
                  import Chessboard from "@/components/chessboard";
                </CodeLine>
                <CodeLine notChanged />
                <CodeLine notChanged>
                  {`export default function App() {`}
                </CodeLine>
                <CodeLine inset={1} notChanged>{`return  (`}</CodeLine>
                <CodeLine inset={2} notChanged>
                  {`<div className="py-20 flex justify-center">`}
                </CodeLine>
                <CodeLine inset={3} notChanged>{`<Chessboard />`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="utils.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`import { clsx, type ClassValue } from "clsx"`}</CodeLine>
                <CodeLine>{`import { twMerge } from "tailwind-merge"`}</CodeLine>
                <CodeLine />
                <CodeLine>{`export function cn(...inputs: ClassValue[]) {`}</CodeLine>
                <CodeLine inset={1}>{`return twMerge(clsx(inputs))`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`import { type ReactNode } from "react";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function Square({`}</CodeLine>
                <CodeLine inset={1}>{`isDark,`}</CodeLine>
                <CodeLine inset={1}>{`children,`}</CodeLine>
                <CodeLine>{`}: {`}</CodeLine>
                <CodeLine inset={1}>{`isDark: boolean;`}</CodeLine>
                <CodeLine inset={1}>{`children: ReactNode;`}</CodeLine>
                <CodeLine>{`}) {`}</CodeLine>
                <CodeLine inset={1}>{`return (`}</CodeLine>
                <CodeLine inset={2}>{`<div`}</CodeLine>
                <CodeLine inset={3}>{`className={cn(`}</CodeLine>
                <CodeLine inset={4}>{`"flex items-center justify-center",`}</CodeLine>
                <CodeLine inset={4}>{`isDark && "bg-gray-200",`}</CodeLine>
                <CodeLine inset={3}>{` )}`}</CodeLine>
                <CodeLine inset={2}>{`>`}</CodeLine>
                <CodeLine inset={3}>{`{children}`}</CodeLine>
                <CodeLine inset={2}>{`</div>`}</CodeLine>
                <CodeLine inset={2}>{`);`}</CodeLine>
                <CodeLine> {`}`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`function renderSquares() {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const squares = [];`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>
                  {`for (let row = 0; row < 8; row++) {`}
                </CodeLine>
                <CodeLine inset={2} notChanged>
                  {`for (let col = 0; col < 8; col++) {`}
                </CodeLine>
                <CodeLine inset={3} notChanged>{`squares.push(`}</CodeLine>
                <CodeLine inset={4}>
                  {'<Square isDark={(row + col) % 2 === 1}>'}
                </CodeLine>
                <CodeLine inset={5} notChanged>
                  {"{row},{col}"}
                </CodeLine>
                <CodeLine inset={4}>
                  {"</Square>"}
                </CodeLine>
                <CodeLine inset={3} notChanged>
                  {");"}
                </CodeLine>
                <CodeLine inset={2} notChanged>
                  {"}"}
                </CodeLine>
                <CodeLine inset={1} notChanged>
                  {"}"}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>
                  {"return squares;"}
                </CodeLine>
                <CodeLine notChanged>{"}"}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export default function Chessboard() {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const boardSquares = renderSquares();`}</CodeLine>
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2} notChanged>
                  {`<div className="grid h-80 w-80 grid-cols-8 grid-rows-8 sm:h-[500px] sm:w-[500px]">`}
                </CodeLine>
                <CodeLine inset={3} notChanged>{`{boardSquares}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <Image
            src="/writing/drag-and-drop/progress-2.jpg"
            alt="Chessboard  at start"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </>
  );
}

function CodeLine({
  notChanged = false,
  inset = 0,
  children,
}: {
  inset?: number;
  notChanged?: boolean;
  children?: React.ReactNode;
}) {
  const SPACES_IN_TAB = 2;

  const insetSpaces = new Array(inset * SPACES_IN_TAB)
    .fill(null)
    .map((_, index) => <span key={index}>&nbsp;</span>);

  return (
    <pre className={cn("", notChanged && "opacity-60")}>
      {children ? (
        <>
          {...insetSpaces}
          {children}
        </>
      ) : (
        <>&nbsp;</>
      )}
    </pre>
  );
}
