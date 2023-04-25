import "@/styles/globals.css";
import { fontMono, fontSans } from "@/styles/fonts";

import Header from "@/components/Header";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Mathew Bushuru",
  description: "Mathew Bushuru's portfolio ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        <main
          className="grid h-screen grid-cols-3 grid-rows-custom overflow-hidden bg-background p-0 pl-3 pr-1 pt-3 font-sans text-foreground sm:grid-cols-desktop
         sm:p-0 sm:pl-6 sm:pt-6  "
        >
          <div className="col-start-1 col-end-3 row-start-1 row-end-2  sm:col-end-2">
            <Header />
          </div>
          <div className="col-start-1 col-end-2 row-start-2  row-end-3 pt-3 sm:pt-5 ">
            <Nav />
          </div>
          <div className="col-start-1 col-end-2 row-start-3 row-end-4 min-h-full ">
            {/* bottomLeft  */}
            <div className="flex items-end pb-12 h-full ">
              <p className="font-mono font-normal text-sm "> Featured Projects: </p>
            </div>
          </div>
          <div className="col-start-2  col-end-4 row-start-2 row-end-4 sm:col-end-3">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
