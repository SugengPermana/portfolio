import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "./components/Navbar"; 
import Footer from "@/app/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" data-theme="forest" suppressHydrationWarning>
      <head>
        {/* set theme BEFORE React render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const theme = localStorage.getItem("theme") || "forest";
                document.documentElement.setAttribute("data-theme", theme);
              })();
            `,
          }}
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
