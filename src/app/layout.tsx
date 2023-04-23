import "@/styles/globals.css";
import { fontMono, fontSans } from "@/styles/fonts";

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
        {children}
      </body>
    </html>
  );
}
