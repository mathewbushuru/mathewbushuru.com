import Image from "next/image";
import { CalendarDaysIcon } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeLine } from "@/components/code-line";

export const metadata = {
  title: "Mathew Bushuru | Blog - Drag and Drop",
};

const blogMetadata = {
  published: false,
  publishDate: "July 03, 2024",
  startedWorkingOnDate: "June 17, 2024",
  lastModifiedDate: "July 03, 2024",
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
            alt="Chessboard"
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
            alt="Chessboard"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>
            We will now make our chess board functional by allowing chess pieces
            to be dragged around. We will be using Pragmatic Drag and Drop from
            Atlassian for our drag-and-drop functionality. This library provides
            a <code className="font-mono">Draggable</code> function that we can
            attach to any HTML element in the page that we want make draggable
            (the chess icon images in our case). To make the chess piece icon
            feel like it is being dragged, we will reduce the opacity of the
            origin element to 40%. To get started run the command below to
            install the package then add the following code to what we have
            currently.
          </p>

          <div className="overflow-x-auto">
            <CodeLine>yarn add @atlaskit/pragmatic-drag-and-drop</CodeLine>
          </div>

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
            alt="Chessboard"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>
            Now that the pieces can be dragged, we will make the squares of the
            chess board act as areas that can be dropped into. We will also
            highlight the squares in a different colour when dragged over to
            provide visual feedback to the user.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={6}>
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
                <CodeLine notChanged>{`import {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useRef,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useEffect,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useState,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactElement,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactNode,`}</CodeLine>
                <CodeLine notChanged>{`} from "react";`}</CodeLine>
                <CodeLine>{`import {`}</CodeLine>
                <CodeLine inset={1}>{`draggable,`}</CodeLine>
                <CodeLine inset={1}>{`dropTargetForElements,`}</CodeLine>
                <CodeLine>{`} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function Piece({ imageSrc, alt }: { imageSrc: string; alt: string }) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`// ...`}</CodeLine>
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
                <CodeLine
                  inset={1}
                >{`const squareRef = useRef<HTMLDivElement | null>(null);`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`const [isDraggedOver, setIsDraggedOver] = useState(false);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{`useEffect(() => {`}</CodeLine>
                <CodeLine inset={2}>{`const el = squareRef.current;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={2}>{`if (el === null) return;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                >{`return dropTargetForElements({`}</CodeLine>
                <CodeLine inset={3}>{`element: el,`}</CodeLine>
                <CodeLine inset={3}>
                  {`onDragEnter: () => setIsDraggedOver(true),`}
                </CodeLine>
                <CodeLine inset={3}>
                  {`onDragLeave: () => setIsDraggedOver(false),`}
                </CodeLine>
                <CodeLine
                  inset={3}
                >{`onDrop: () => setIsDraggedOver(false),`}</CodeLine>
                <CodeLine inset={2}>{`});`}</CodeLine>
                <CodeLine inset={1}>{`}, []);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2}>{`<div`}</CodeLine>
                <CodeLine inset={3}>{`ref={squareRef}`}</CodeLine>
                <CodeLine inset={3}>{`className={cn(`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`"flex items-center justify-center",`}</CodeLine>
                <CodeLine inset={4}>
                  {`isDraggedOver ? "bg-sky-200" : isDark ? "bg-gray-200" : "bg-popover",`}
                </CodeLine>
                <CodeLine inset={3}>{`)}`}</CodeLine>
                <CodeLine inset={2}>{`>`}</CodeLine>
                <CodeLine inset={3} notChanged>{`{children}`}</CodeLine>
                <CodeLine inset={2}>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function renderSquares(allPiecesData: TPieceData[]) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{` // ... `}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export default function Chessboard() {`}</CodeLine>
                <CodeLine inset={1} notChanged>{` // ... `}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            As you can see below, a square is highlighted in blue when a chess
            piece is dragged over it.
          </p>

          <Image
            src="/writing/drag-and-drop/progress-5.jpg"
            alt="Chessboard"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />

          <p>
            We can go further and highlight a square green if it is eligible to
            be dropped onto and red when its not. For this to work, each
            draggable piece will have to carry its original coordinates with it
            when it is being dragged. We modify the{" "}
            <code className="font-mono">Piece</code> component to accept
            coordinates and pass it on to the{" "}
            <code className="font-mono">getInitialData</code> field of the
            arguments object taken by{" "}
            <code className="font-mono">draggable</code>.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={7}>
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
                <CodeLine notChanged>{`import {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useRef,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useEffect,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useState,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactElement,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactNode,`}</CodeLine>
                <CodeLine notChanged>{`} from "react";`}</CodeLine>
                <CodeLine notChanged>{`import {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`draggable,`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`dropTargetForElements,`}</CodeLine>
                <CodeLine
                  notChanged
                >{`} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine>{`type TPieceName = "king" | "pawn";`}</CodeLine>
                <CodeLine>{`type TCoordsArr = [number, number];`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function Piece({`}</CodeLine>
                <CodeLine inset={1}>{`name,`}</CodeLine>
                <CodeLine inset={1}>{`coords,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`imageSrc,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`alt,`}</CodeLine>
                <CodeLine>{`}: {`}</CodeLine>
                <CodeLine inset={1}>{`name: TPieceName;`}</CodeLine>
                <CodeLine inset={1}>{`coords: TCoordsArr;`}</CodeLine>
                <CodeLine inset={1} notChanged>{`imageSrc: string;`}</CodeLine>
                <CodeLine inset={1} notChanged>{`alt: string;`}</CodeLine>
                <CodeLine>{`}) {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const pieceRef = useRef<HTMLImageElement | null>(null);`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const [isDragging, setIsDragging] = useState<boolean>(false);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`useEffect(() => {`}</CodeLine>
                <CodeLine
                  inset={2}
                  notChanged
                >{`const el = pieceRef.current;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                  notChanged
                >{`if (el === null) return;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={2} notChanged>{`return draggable({`}</CodeLine>
                <CodeLine inset={3} notChanged>{`element: el,`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`getInitialData: () => ({ name, coords }),`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`onDragStart: () => setIsDragging(true),`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`onDrop: () => setIsDragging(false),`}</CodeLine>
                <CodeLine inset={2} notChanged>{`});`}</CodeLine>
                <CodeLine inset={1}>{`}, [name, coords]);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2} notChanged>{`<img`}</CodeLine>
                <CodeLine inset={3} notChanged>{`ref={pieceRef}`}</CodeLine>
                <CodeLine inset={3} notChanged>{`src={imageSrc}`}</CodeLine>
                <CodeLine inset={3} notChanged>{`alt={alt}`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`className={cn("h-11 w-11", isDragging && "opacity-40")}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`/>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`const pieceComponentLookup: {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`[Key in TPieceName]: (coords: TCoordsArr) => ReactElement;`}</CodeLine>
                <CodeLine>{`} = {`}</CodeLine>
                <CodeLine inset={1}>{`king: (coords) => (`}</CodeLine>
                <CodeLine
                  inset={2}
                >{`<Piece name="king" coords={coords} imageSrc="/icons/king.png" alt="King" />`}</CodeLine>
                <CodeLine inset={1}>{`),`}</CodeLine>
                <CodeLine inset={1}>{`pawn: (coords) => (`}</CodeLine>
                <CodeLine
                  inset={2}
                >{`<Piece name="pawn" coords={coords} imageSrc="/icons/pawn.png" alt="Pawn" />`}</CodeLine>
                <CodeLine inset={1}>{`),`}</CodeLine>
                <CodeLine>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`type TPieceData = {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`name: TPieceName;`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`coords: TCoordsArr;`}</CodeLine>
                <CodeLine notChanged>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function areCoordsEqual(c1: TCoordsArr, c2: TCoordsArr) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>
                  {`function Square({isDark, children}: {isDark: boolean; children: ReactNode;})`}
                </CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function renderSquares(allPiecesData: TPieceData[]) {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const squares = [];`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                  notChanged
                >{`for (let row = 0; row < 8; row++) {`}</CodeLine>
                <CodeLine
                  inset={2}
                  notChanged
                >{`for (let col = 0; col < 8; col++) {`}</CodeLine>
                <CodeLine inset={3} notChanged>
                  {`const currCoordsArr: TCoordsArr = [row, col];`}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={3} notChanged>
                  {`const pieceInThisCoord = allPiecesData.find((pieceData) =>`}
                </CodeLine>
                <CodeLine inset={18} notChanged>
                  {`areCoordsEqual(currCoordsArr, pieceData.coords),`}
                </CodeLine>
                <CodeLine inset={16} notChanged>
                  {`);`}{" "}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={3}>{`squares.push(`}</CodeLine>
                <CodeLine inset={4}>
                  {
                    "<Square isDark={(row + col) % 2 === 1} key={`${row}${col}`}>"
                  }
                </CodeLine>
                <CodeLine inset={5}>{`{pieceInThisCoord ? (`}</CodeLine>
                <CodeLine inset={6}>
                  {`pieceComponentLookup[pieceInThisCoord.name](currCoordsArr)`}
                </CodeLine>
                <CodeLine inset={5}>{`) : (`}</CodeLine>
                <CodeLine inset={6}>{`<>&nbsp;</>`}</CodeLine>
                <CodeLine inset={5}>{`)}`}</CodeLine>
                <CodeLine inset={4}>{`</Square>,`}</CodeLine>
                <CodeLine inset={3}>{`);`}</CodeLine>
                <CodeLine inset={2} notChanged>{`}`}</CodeLine>
                <CodeLine inset={1} notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return squares;`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export default function Chessboard() {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            We can use this starting location and piece name at our drop targets
            (<code className="font-mono">Square</code> components). We also
            introduce an <code className="font-mono">isMoveValid</code> function
            that checks if a chess piece can be dropped onto a particular square
            based on its start and end location, and the piece type.
          </p>

          <p>
            The TypeScript types for the chess piece's name and coordinates are
            not carried over from the draggable (
            <code className="font-mono">Piece</code> component) to the drop
            target (<code className="font-mono">Square</code> component). To
            make Typescript happy, we'll be using a temporary escape hatch (The
            'as' type assertion to cast them to their expected types). Later on,
            we'll implement a solution for this using type guards which are
            functions or expressions that perform a runtime check to guarantee
            the types in a certain scope.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={8}>
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
                <CodeLine notChanged>{`import {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useRef,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useEffect,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`useState,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactElement,`}</CodeLine>
                <CodeLine inset={1} notChanged>{`type ReactNode,`}</CodeLine>
                <CodeLine notChanged>{`} from "react";`}</CodeLine>
                <CodeLine notChanged>{`import {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`draggable,`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`dropTargetForElements,`}</CodeLine>
                <CodeLine
                  notChanged
                >{`} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`import { cn } from "@/lib/utils";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`type TPieceName = "king" | "pawn";`}</CodeLine>
                <CodeLine
                  notChanged
                >{`type TCoordsArr = [number, number];`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function Piece({ // ... } : { // ... }) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`const pieceComponentLookup: {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`[Key in TPieceName]: (coords: TCoordsArr) => ReactElement;`}</CodeLine>
                <CodeLine notChanged>{`} = {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`type TPieceData = {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`name: TPieceName;`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`coords: TCoordsArr;`}</CodeLine>
                <CodeLine notChanged>{`};`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function areCoordsEqual(c1: TCoordsArr, c2: TCoordsArr) {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`function isMoveValid(`}</CodeLine>
                <CodeLine inset={1}>{`startCoords: TCoordsArr,`}</CodeLine>
                <CodeLine inset={1}>{`destCoords: TCoordsArr,`}</CodeLine>
                <CodeLine inset={1}>{`pieceName: TPieceName,`}</CodeLine>
                <CodeLine>{`) {`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`const rowDist = Math.abs(startCoords[0] - destCoords[0]);`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`const colDist = Math.abs(startCoords[1] - destCoords[1]);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{`switch (pieceName) {`}</CodeLine>
                <CodeLine inset={2}>{`case "king":`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`return [0, 1].includes(rowDist) && [0, 1].includes(colDist);`}</CodeLine>
                <CodeLine inset={2}>{`case "pawn":`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`return colDist === 0 && startCoords[0] - destCoords[0] === 1;`}</CodeLine>
                <CodeLine inset={2}>{`default:`}</CodeLine>
                <CodeLine inset={3}>{`return false;`}</CodeLine>
                <CodeLine inset={1}>{`}`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>
                  {`function Square({coords, children}: {isDark: TCoordsArr; children: ReactNode;})`}
                </CodeLine>
                <CodeLine
                  inset={1}
                >{`type THoveredState = "idle" | "validMove" | "invalidMove";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                >{`const squareRef = useRef<HTMLDivElement | null>(null);`}</CodeLine>
                <CodeLine
                  inset={1}
                >{`const [hoveredState, setHoveredState] = useState<THoveredState>("idle");`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                >{`const isDark = (coords[0] + coords[1]) % 2 === 1;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`useEffect(() => {`}</CodeLine>
                <CodeLine
                  inset={2}
                  notChanged
                >{`const el = squareRef.current;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                  notChanged
                >{`if (el === null) return;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                >{`return dropTargetForElements({`}</CodeLine>
                <CodeLine inset={3} notChanged>{`element: el,`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`onDragEnter: ({ source: draggedPiece }) => {`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`const startCoords = draggedPiece.data.coords as TCoordsArr;`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`const pieceName = draggedPiece.data.name as TPieceName;`}</CodeLine>
                <CodeLine
                  inset={4}
                >{`if (isMoveValid(startCoords, coords, pieceName)) {`}</CodeLine>
                <CodeLine inset={5}>{`setHoveredState("validMove");`}</CodeLine>
                <CodeLine inset={4}>{`} else {`}</CodeLine>
                <CodeLine
                  inset={5}
                >{`setHoveredState("invalidMove");`}</CodeLine>
                <CodeLine inset={4}>{`}`}</CodeLine>
                <CodeLine inset={3}>{`},`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`onDragLeave: () => setHoveredState("idle"),`}</CodeLine>
                <CodeLine
                  inset={3}
                >{`onDrop: () => setHoveredState("idle"),`}</CodeLine>
                <CodeLine inset={2}>{`});`}</CodeLine>
                <CodeLine inset={1} notChanged>{`}, []);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{`return (`}</CodeLine>
                <CodeLine inset={2}>{`<div`}</CodeLine>
                <CodeLine inset={3} notChanged>{`ref={squareRef}`}</CodeLine>
                <CodeLine inset={3}>{`className={cn(`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`"flex items-center justify-center",`}</CodeLine>
                <CodeLine inset={4}>{`hoveredState === "validMove"`}</CodeLine>
                <CodeLine inset={5}>{`? "bg-emerald-200"`}</CodeLine>
                <CodeLine
                  inset={6}
                >{`: hoveredState === "invalidMove"`}</CodeLine>
                <CodeLine inset={7}>{`? "bg-rose-200"`}</CodeLine>
                <CodeLine inset={8}>{`: isDark`}</CodeLine>
                <CodeLine inset={9}>{`? "bg-gray-200"`}</CodeLine>
                <CodeLine inset={9}>{`: "bg-popover",`}</CodeLine>
                <CodeLine inset={3}>{`)}`}</CodeLine>
                <CodeLine inset={2}>{`>`}</CodeLine>
                <CodeLine inset={3} notChanged>{`{children}`}</CodeLine>
                <CodeLine inset={2}>{`</div>`}</CodeLine>
                <CodeLine inset={1}>{`);`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`function renderSquares(allPiecesData: TPieceData[]) {`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const squares = [];`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                  notChanged
                >{`for (let row = 0; row < 8; row++) {`}</CodeLine>
                <CodeLine
                  inset={2}
                  notChanged
                >{`for (let col = 0; col < 8; col++) {`}</CodeLine>
                <CodeLine inset={3} notChanged>
                  {`const currCoordsArr: TCoordsArr = [row, col];`}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={3} notChanged>
                  {`const pieceInThisCoord = allPiecesData.find((pieceData) =>`}
                </CodeLine>
                <CodeLine inset={18} notChanged>
                  {`areCoordsEqual(currCoordsArr, pieceData.coords),`}
                </CodeLine>
                <CodeLine inset={16} notChanged>
                  {`);`}{" "}
                </CodeLine>
                <CodeLine />
                <CodeLine inset={3} notChanged>{`squares.push(`}</CodeLine>
                <CodeLine inset={4}>
                  {"<Square coords={currCoordsArr} key={`${row}${col}`}>"}
                </CodeLine>
                <CodeLine
                  inset={5}
                  notChanged
                >{`{pieceInThisCoord ? (`}</CodeLine>
                <CodeLine inset={6} notChanged>
                  {`pieceComponentLookup[pieceInThisCoord.name](currCoordsArr)`}
                </CodeLine>
                <CodeLine inset={5} notChanged>{`) : (`}</CodeLine>
                <CodeLine inset={6} notChanged>{`<>&nbsp;</>`}</CodeLine>
                <CodeLine inset={5} notChanged>{`)}`}</CodeLine>
                <CodeLine inset={4}>{`</Square>,`}</CodeLine>
                <CodeLine inset={3}>{`);`}</CodeLine>
                <CodeLine inset={2} notChanged>{`}`}</CodeLine>
                <CodeLine inset={1} notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return squares;`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine
                  notChanged
                >{`export default function Chessboard() {`}</CodeLine>
                <CodeLine inset={1} notChanged>{`// ...`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>
            We can now move the chess pieces and the square on the chessboard
            will show green if it is a valid move and red when it is not.
            However, one crucial piece is still missing. If you drop a piece, it
            goes back to its original location. We will fix this using the{" "}
            <code className="font-mono">monitorForElements</code> function from
            Pragmatic drag and drop, which will enable us to update the
            locations/coordinates states of all pieces after any drag and drop
            operation. We modify the Square component to extract the{" "}
            <code className="font-mono">coords</code> data that we attached to
            the Piece component above and then add the{" "}
            <code className="font-mono">monitorForElements</code> function to
            the Chessboard component. We also replace the allPiecesData array
            with a React state variable.
          </p>

          <Tabs defaultValue="chessboard.tsx" key={9}>
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
                <CodeLine notChanged>{`// ...`}</CodeLine>
                <CodeLine>{`import {draggable, dropTargetForElements, monitorForElements} from "@atlaskit/pragmatic-drag-and-drop/element/adapter";`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>{`// ...`}</CodeLine>
                <CodeLine />
                <CodeLine notChanged>
                  {`function Square({coords, children}: {isDark: TCoordsArr; children: ReactNode;})`}
                </CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`type THoveredState = "idle" | "validMove" | "invalidMove";`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                  notChanged
                >{`const squareRef = useRef<HTMLDivElement | null>(null);`}</CodeLine>
                <CodeLine
                  inset={1}
                  notChanged
                >{`const [hoveredState, setHoveredState] = useState<THoveredState>("idle");`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={1}
                  notChanged
                >{`const isDark = (coords[0] + coords[1]) % 2 === 1;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`useEffect(() => {`}</CodeLine>
                <CodeLine
                  inset={2}
                  notChanged
                >{`const el = squareRef.current;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                  notChanged
                >{`if (el === null) return;`}</CodeLine>
                <CodeLine />
                <CodeLine
                  inset={2}
                >{`return dropTargetForElements({`}</CodeLine>
                <CodeLine inset={3} notChanged>{`element: el,`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`onDragEnter: ({ source: draggedPiece }) => {`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`const startCoords = draggedPiece.data.coords as TCoordsArr;`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`const pieceName = draggedPiece.data.name as TPieceName;`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`if (isMoveValid(startCoords, coords, pieceName)) {`}</CodeLine>
                <CodeLine
                  inset={5}
                  notChanged
                >{`setHoveredState("validMove");`}</CodeLine>
                <CodeLine inset={4} notChanged>{`} else {`}</CodeLine>
                <CodeLine
                  inset={5}
                  notChanged
                >{`setHoveredState("invalidMove");`}</CodeLine>
                <CodeLine inset={4} notChanged>{`}`}</CodeLine>
                <CodeLine inset={3} notChanged>{`},`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`onDragLeave: () => setHoveredState("idle"),`}</CodeLine>
                <CodeLine
                  inset={3}
                  notChanged
                >{`onDrop: () => setHoveredState("idle"),`}</CodeLine>
                <CodeLine inset={3}>{`getData: () => ({ coords }),`}</CodeLine>
                <CodeLine inset={2}>{`});`}</CodeLine>
                <CodeLine inset={1} notChanged>{`}, []);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2} notChanged>{`<div`}</CodeLine>
                <CodeLine inset={3} notChanged>{`ref={squareRef}`}</CodeLine>
                <CodeLine inset={3} notChanged>{`className={cn(`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`"flex items-center justify-center",`}</CodeLine>
                <CodeLine
                  inset={4}
                  notChanged
                >{`hoveredState === "validMove"`}</CodeLine>
                <CodeLine inset={5} notChanged>{`? "bg-emerald-200"`}</CodeLine>
                <CodeLine
                  inset={6}
                  notChanged
                >{`: hoveredState === "invalidMove"`}</CodeLine>
                <CodeLine inset={7} notChanged>{`? "bg-rose-200"`}</CodeLine>
                <CodeLine inset={8} notChanged>{`: isDark`}</CodeLine>
                <CodeLine inset={9} notChanged>{`? "bg-gray-200"`}</CodeLine>
                <CodeLine inset={9} notChanged>{`: "bg-popover",`}</CodeLine>
                <CodeLine inset={3} notChanged>{`)}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`>`}</CodeLine>
                <CodeLine inset={3} notChanged>{`{children}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine notChanged>{`}`}</CodeLine>
                <CodeLine />
                <CodeLine>{`export default function Chessboard() {`}</CodeLine>
                <CodeLine inset={1}>{`const [allPiecesData, setAllPiecesData] = useState<TPieceData[]>([`}</CodeLine>
                <CodeLine inset={2}>{`{ name: "king", coords: [7, 3] },`}</CodeLine>
                <CodeLine inset={2}>{`{ name: "pawn", coords: [6, 5] },`}</CodeLine>
                <CodeLine inset={1}>{`]);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1}>{`useEffect(() => {`}</CodeLine>
                <CodeLine inset={2}>{`return monitorForElements({`}</CodeLine>
                <CodeLine inset={3}>{`onDrop: ({ source, location }) => {`}</CodeLine>
                <CodeLine inset={4}>{`const destination = location.current.dropTargets[0];`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`if (!destination) return;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`const sourceCoords = source.data.coords as TCoordsArr;`}</CodeLine>
                <CodeLine inset={4}>{`const destCoords = destination.data.coords as TCoordsArr;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`const draggedPieceData = allPiecesData.find((p) =>`}</CodeLine>
                <CodeLine inset={5}>{`areCoordsEqual(p.coords, sourceCoords),`}</CodeLine>
                <CodeLine inset={4}>{`);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`if (!draggedPieceData) return;`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`const restOfPiecesData = allPiecesData.filter(`}</CodeLine>
                <CodeLine inset={5}>{`(p) => p !== draggedPieceData,`}</CodeLine>
                <CodeLine inset={4}>{`);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={4}>{`if (isMoveValid(sourceCoords, destCoords, draggedPieceData.name)) {`}</CodeLine>
                <CodeLine inset={5}>{`setAllPiecesData([`}</CodeLine>
                <CodeLine inset={6}>{`{ name: draggedPieceData.name, coords: destCoords },`}</CodeLine>
                <CodeLine inset={6}>{`...restOfPiecesData,`}</CodeLine>
                <CodeLine inset={5}>{`]);`}</CodeLine>
                <CodeLine inset={4}>{`}`}</CodeLine>
                <CodeLine inset={3}>{`},`}</CodeLine>
                <CodeLine inset={2}>{`});`}</CodeLine>
                <CodeLine inset={1}>{`}, [allPiecesData]);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`const boardSquares = renderSquares(allPiecesData);`}</CodeLine>
                <CodeLine />
                <CodeLine inset={1} notChanged>{`return (`}</CodeLine>
                <CodeLine inset={2} notChanged>{`<div className="grid h-80 w-80 grid-cols-8 grid-rows-8 sm:h-[500px] sm:w-[500px]">`}</CodeLine>
                <CodeLine inset={3} notChanged>{`{boardSquares}`}</CodeLine>
                <CodeLine inset={2} notChanged>{`</div>`}</CodeLine>
                <CodeLine inset={1} notChanged>{`);`}</CodeLine>
                <CodeLine>{`}`}</CodeLine>
              </code>
            </TabsContent>
          </Tabs>

          <p>[This article is still a work in progress]</p>
        </div>
      </div>
    </>
  );
}
