import type { Metadata } from "next";
import { Marcellus, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Renix beauty salon",
  description: "Renix beauty salon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen overflow-x-hidden">
      <body
        className={cn("antialiased", marcellus.variable, montserrat.variable)}
      >
        <CursorProvider>
          <Transition />
          <Header />
          <PageTransition>{children}</PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
