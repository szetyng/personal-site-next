import "./globals.css";
import "devicon/devicon.min.css";

import NavBar from "./components/NavBar";

export const metadata = {
  title: {
    default: "Sze Tyng Lee",
    template: "Sze Tyng Lee | %s",
  },
  description: "Sze Tyng Lee's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
