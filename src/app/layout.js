import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Sze Tyng Lee",
  description: "Sze Tyng Lee's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
