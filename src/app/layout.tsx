import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "iahmadjw - Visual Studio Code Resume",
  description: "An interactive full-stack developer portfolio built to look like an IDE workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${jetbrainsMono.className} antialiased h-full w-full bg-[#1e1e1e] text-[#d4d4d4] overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}