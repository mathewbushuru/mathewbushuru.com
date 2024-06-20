import Image from "next/image";
import { CalendarDaysIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Mathew Bushuru | Blog - Drag and Drop",
};

const blogMetadata = {
  published: false,
  publishDate: "June 20, 2024",
  startedWorkingOnDate: "06/17/2024",
  lastModifiedDate: "06/20/2024",
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
            Fully clientside approach
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
                <pre>{`import Chessboard from "@/components/chessboard";`}</pre>
                <pre>&nbsp;</pre>
                <pre>{`export default function App() {`}</pre>
                <pre>&nbsp;&nbsp;{`return (`}</pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {`<div>`}
                </pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Chessboard />`}
                </pre>
                <pre>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</pre>
                <pre>&nbsp;&nbsp;{`);`}</pre>
                <pre>{`}`}</pre>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <pre>{`export default function Chessboard() {`}</pre>
                <pre>&nbsp;&nbsp;{`return <>Chessboard</>;`}</pre>
                <pre>{`}`}</pre>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            We will then create a helper function that renders all the 64
            squares of the chessboard. This function is called by the Chessboard
            component to create all the square components that are then rendered
            on a 500px by 500px grid (320px by 320px on mobile). Another minor
            styling improvement will be centering the Chessboard on the page in
            the App component.
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
                <CodeLine notChanged>&nbsp;</CodeLine>
                <CodeLine
                  notChanged
                >{`export default function App() {`}</CodeLine>
                <CodeLine notChanged inset={1}>{`return  (`}</CodeLine>
                <CodeLine inset={2}>{`<div className="py-20 flex justify-center">`}</CodeLine>
                <CodeLine notChanged inset={3}>{`<Chessboard />`}</CodeLine> 
                <CodeLine notChanged inset={2}>{`</div>`}</CodeLine>  
                <CodeLine notChanged inset={1}>{`);`}</CodeLine>  
                <CodeLine>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <pre>{`function renderSquares() {`}</pre>
                <pre>&nbsp;&nbsp;{`const squares = [];`}</pre>
                <pre>&nbsp;</pre>
                <pre>&nbsp;&nbsp;{`for (let row = 0; row < 8; row++) {`}</pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {`for (let col = 0; col < 8; col++) {`}
                </pre>
                <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`squares.push(`}</pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {'<div className="text-xs" key={`${row}${col}`}>'}
                </pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {"{row},{col}"}
                </pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</div>"}
                </pre>
                <pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{");"}</pre>
                <pre>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</pre>
                <pre>&nbsp;&nbsp;{"}"}</pre>
                <pre>&nbsp;</pre>
                <pre>&nbsp;&nbsp;{"return squares;"}</pre>
                <pre>{"}"}</pre>
                <pre>&nbsp;</pre>
                <pre className="opacity-60">{`export default function Chessboard() {`}</pre>
                <pre>&nbsp;&nbsp;{`const boardSquares = renderSquares();`}</pre>
                <pre>&nbsp;&nbsp;{`return (`}</pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {`<div className="grid h-80 w-80 grid-cols-8 grid-rows-8 sm:h-[500px] sm:w-[500px]">`}
                </pre>
                <pre>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{boardSquares}`}
                </pre>
                <pre>&nbsp;&nbsp;&nbsp;&nbsp;{`</div>`}</pre>
                <pre>&nbsp;&nbsp;{`);`}</pre>
                <pre className="opacity-60">{`}`}</pre>
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
  children: React.ReactNode;
}) {
  const SPACES_IN_TAB = 2;

  const insetSpaces = new Array(inset * SPACES_IN_TAB)
    .fill(null)
    .map((_, index) => <span key={index}>&nbsp;</span>);

  return (
    <pre className={cn("", notChanged && "opacity-60")}>
      {...insetSpaces}
      {children}
    </pre>
  );
}
