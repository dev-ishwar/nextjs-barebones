import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/app/components/header';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextJS Barebones",
  description: "A simple app to demonstrate NextJS concepts",
};

export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Header />
        {auth}
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
