import Image from "next/image";
import { CalendarDaysIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeLine } from "@/components/code-line";

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
            chessboard. We will be using a helper function (
            <code className="font-mono">cn</code>) that uses Tailwind-merge and
            Clsx to conditionally apply tailwind classes when the square is
            dark.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={3}>
            <TabsList>
              <TabsTrigger value="App.tsx">App.tsx</TabsTrigger>
              <TabsTrigger value="utils.tsx">
                <span className="hidden sm:inline">lib/</span>utils.tsx
              </TabsTrigger>
              <TabsTrigger value="chessboard.tsx">
                <span className="hidden sm:inline">components</span>
                chessboard.tsx
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
                <CodeLine
                  inset={4}
                >{`"flex items-center justify-center",`}</CodeLine>
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
                  {"<Square isDark={(row + col) % 2 === 1}>"}
                </CodeLine>
                <CodeLine inset={5} notChanged>
                  {"{row},{col}"}
                </CodeLine>
                <CodeLine inset={4}>{"</Square>"}</CodeLine>
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

          <p>
            We will be maintaining the positional data of the chess pieces in
            the <code className="font-mono">Chessboard</code> component. We pass
            down this data to the{" "}
            <code className="font-mono">renderSquares</code> function which uses
            it to add chess piece icons to the relevant squares. To simplify
            this, we create a lookup table that returns a{" "}
            <code className="font-mono">Piece</code> component that has the
            relevant icon image.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={4}>
            <TabsList>
              <TabsTrigger value="App.tsx">App.tsx</TabsTrigger>
              <TabsTrigger value="utils.tsx">
                <span className="hidden sm:inline">lib/</span>utils.tsx
              </TabsTrigger>
              <TabsTrigger value="chessboard.tsx">
                <span className="hidden sm:inline">components/</span>
                chessboard.tsx
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
                <CodeLine
                  notChanged
                >{`import { clsx, type ClassValue } from "clsx"`}</CodeLine>
                <CodeLine
                  notChanged
                >{`import { twMerge } from "tailwind-merge"`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export function cn(...inputs: ClassValue[]) {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`return twMerge(clsx(inputs))`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>
                  {`import { type ReactElement, type ReactNode } from "react";`}
                </CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function Piece({ imageSrc, alt }: { imageSrc: string; alt: string }) {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`return <img src={imageSrc} alt={alt} className="h-11 w-11" />;`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`type TPieceName = "king" | "pawn";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`const pieceComponentLookup: {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`[Key in TPieceName]: () => ReactElement;`}</CodeLine>
                <CodeLine>{`} = {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`king: () => <Piece imageSrc="/icons/king.png" alt="King" />,`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`pawn: () => <Piece imageSrc="/icons/pawn.png" alt="Pawn" />,`}</CodeLine>
                <CodeLine>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine>{`type TCoordsArr = [number, number];`}</CodeLine>
                <CodeLine />
                <CodeLine>{`type TPieceData = {`}</CodeLine>
                <CodeLine inset={1}>{`name: TPieceName;`}</CodeLine>
                <CodeLine inset={1}>{`coords: TCoordsArr;`}</CodeLine>
                <CodeLine>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function areCoordsEqual(c1: TCoordsArr, c2: TCoordsArr) {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`return c1[0] === c2[0] && c1[1] === c2[1];`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`function Square({`}</CodeLine>
                <CodeLine inset={1} notChanged>{`isDark,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`children,`}</CodeLine>
                <CodeLine notChanged>{`}: {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`isDark: boolean;`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`children: ReactNode;`}</CodeLine>
                <CodeLine notChanged>{`}) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2} notChanged>{`<div`}</CodeLine>
                <CodeLine inset={3} notChanged>{`className={cn(`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`"flex items-center justify-center",`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`isDark && "bg-gray-200",`}</CodeLine>
                <CodeLine inset={3} notChanged>{` )}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`>`}</CodeLine>
                <CodeLine inset={3} notChanged>{`{children}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={2} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged> {`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function renderSquares(allPiecesData: TPieceData[]) {`}</CodeLine>
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
                <CodeLine
                  inset={3}
                >{`const currCoordsArr: TCoordsArr = [row, col];`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={3}
                >{`const pieceInThisCoord = allPiecesData.find((pieceData) =>`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`areCoordsEqual(currCoordsArr, pieceData.coords),`}</CodeLine>
                <CodeLine inset={3}>{`);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={3}>{`let ComponentToRender;`}</CodeLine>
                <CodeLine inset={3}>{`if (pieceInThisCoord) {`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`ComponentToRender = pieceComponentLookup[pieceInThisCoord.name];`}</CodeLine>
                <CodeLine inset={4}>{`squares.push(`}</CodeLine>
                <CodeLine inset={5}>
                  {
                    "<Square isDark={(row + col) % 2 === 1} key={`${row}${col}`}>"
                  }
                </CodeLine>
                <CodeLine inset={6}>{`<ComponentToRender />`}</CodeLine>
                <CodeLine inset={5}>{`</Square>,`}</CodeLine>
                <CodeLine inset={4}>{`);`}</CodeLine>
                <CodeLine inset={3}>{`} else {`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`ComponentToRender = () => <>&nbsp;</>;`}</CodeLine>
                <CodeLine inset={4}>{`squares.push(`}</CodeLine>
                <CodeLine inset={5}>
                  {
                    "<Square isDark={(row + col) % 2 === 1} key={`${row}${col}`}>"
                  }
                </CodeLine>
                <CodeLine inset={6}>{`<ComponentToRender />`}</CodeLine>
                <CodeLine inset={5}>{`</Square>,`}</CodeLine>
                <CodeLine inset={4}>{`);`}</CodeLine>
                <CodeLine inset={3}>{`}`}</CodeLine>
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
                >{`const allPiecesData: TPieceData[] = [`}</CodeLine>
                <CodeLine
                  inset={2}
                >{`{ name: "king", coords: [3, 2] },`}</CodeLine>
                <CodeLine
                  inset={2}
                >{`{ name: "pawn", coords: [1, 6] },`}</CodeLine>
                <CodeLine inset={1}>{`];`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                >{`const boardSquares = renderSquares(allPiecesData);`}</CodeLine>
                <CodeLine />
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
            src="/writing/drag-and-drop/progress-3.jpg"
            alt="Chessboard  at start"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>
            We will now make our chess board functional by allowing chess pieces
            to be dragged around. We will be using{" "}
            <a
              href="https://github.com/atlassian/pragmatic-drag-and-drop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:underline hover:underline-offset-4"
            >
              Pragmatic Drag and Drop
            </a>{" "}
            from Atlassian for our drag-and-drop functionality. This library
            provides a <code className="font-mono">Draggable</code> function
            that we can attach to any HTML element in the page that we want make
            draggable (the chess icon images in our case). To make the chess
            piece icon feel like it is being dragged, we will reduce the opacity
            of the origin element to 40%. To get started run the command below
            to install the package then add the following code to what we have
            currently.
          </p>

          <CodeLine>yarn add @atlaskit/pragmatic-drag-and-drop</CodeLine>

          <Tabs defaultValue="chessboard.tsx" key={5}>
            <TabsList>
              <TabsTrigger value="chessboard.tsx">
                components/chessboard.tsx
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="chessboard.tsx"
              className="overflow-x-auto rounded-md bg-muted p-3 text-sm"
            >
              <code>
                <CodeLine>{`import {`}</CodeLine>
                <CodeLine> useRef,</CodeLine>
                <CodeLine> useEffect,</CodeLine>
                <CodeLine> useState,</CodeLine>
                <CodeLine> type ReactElement,</CodeLine>
                <CodeLine> type ReactNode,</CodeLine>
                <CodeLine>{`} from "react";`}</CodeLine>
                <CodeLine>{`import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function Piece({ imageSrc, alt }: { imageSrc: string; alt: string }) {`}</CodeLine>
                <CodeLine inset={1}>
                  {`const pieceRef = useRef<HTMLImageElement | null>(null);`}
                </CodeLine>
                <CodeLine inset={1}>
                  {`const [isDragging, setIsDragging] = useState<boolean>(false);`}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{`useEffect(() => {`}</CodeLine>
                <CodeLine inset={2}>const el = pieceRef.current;</CodeLine>
                <CodeLine />
                <CodeLine inset={2}>if (el === null) return;</CodeLine>
                <CodeLine />
                <CodeLine inset={2}>{`return draggable({`}</CodeLine>
                <CodeLine inset={3}>element: el,</CodeLine>
                <CodeLine inset={3}>
                  {`onDragStart: () => setIsDragging(true),`}
                </CodeLine>
                <CodeLine
                  inset={3}
                >{`onDrop: () => setIsDragging(false),`}</CodeLine>
                <CodeLine inset={2}> {`});`}</CodeLine>
                <CodeLine inset={1}>{`}, []);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>return (</CodeLine>
                <CodeLine inset={2}>{`<img`}</CodeLine>
                <CodeLine inset={3}>{`ref={pieceRef}`}</CodeLine>
                <CodeLine inset={3}>{`src={imageSrc}`}</CodeLine>
                <CodeLine inset={3}>{`alt={alt}`}</CodeLine>
                <CodeLine inset={3}>
                  {`className={cn("h-11 w-11", isDragging && "opacity-40")}`}
                </CodeLine>
                <CodeLine inset={2}>{`/>`}</CodeLine>
                <CodeLine inset={1}>{`);`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`type TPieceName = "king" | "pawn";`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`// ...`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            As shown below, we can now drag the individual chess pieces and the
            squares they were dragged from fades.
          </p>

          <Image
            src="/writing/drag-and-drop/progress-4.jpg"
            alt="Chessboard  at start"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>[This article is still a work in progress]</p>
        </div>
      </div>
    </>
  );
}
