import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Chakra_Petch } from "next/font/google";
import { Navbar } from "./components/Navbar"; 
import Footer from "@/app/components/Footer";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const chakra_Petch = Chakra_Petch ({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakra-petch",
}) 

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
      <body className={`${poppins.variable} ${chakra_Petch.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="white-black"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
