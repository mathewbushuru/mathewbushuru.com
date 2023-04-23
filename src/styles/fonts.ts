import { Inter, Roboto_Mono,Inconsolata } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fontMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// export const fontMono = Inconsolata({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-mono",
// });
