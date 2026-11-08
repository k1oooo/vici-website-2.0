import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const switzer = localFont({
  src: [
    {
      path: "../public/fonts/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Switzer-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vici Software Development",
  description:
    "Vici is a Kuala Lumpur technology partner. From custom software to the systems and infrastructure that run it, we help businesses build their technology environment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${switzer.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
