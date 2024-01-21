import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavMenuContent } from "@/components/nav-menu-content";
import { MobileNavbar } from "@/components/mobile-navbar";

export const metadata: Metadata = {
  title: "Mathew Bushuru | Home",
  description: "Mathew Bushuru's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-screen overflow-hidden">
            {/* DesktopScreen Plus Sidebar  */}
            <div className="hidden shadow-lg dark:border-r lg:block">
              <NavMenuContent />
            </div>
            {/* Page content  */}
            <div className="overflow-scroll lg:px-8">
              <div className="fixed left-0 right-0 top-0 lg:hidden">
                <MobileNavbar />
              </div>
              <div className="mb-4 px-5 pt-16 lg:pt-28">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
