import type { Metadata } from "next";
import { Chakra_Petch, Poppins } from "next/font/google";
import { Navbar } from "./components/Navbar";
import CursorTrail from "./components/CursorTrail";
import AOSProvider from "./components/AOSProvider";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const chakra_Petch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-chakra-petch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugeng - Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${chakra_Petch.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorTrail />
          <Navbar />
          <AOSProvider>{children}</AOSProvider>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
