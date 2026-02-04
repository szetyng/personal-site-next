import "./globals.css";
import "devicon/devicon.min.css";
import Icon from "@mdi/react";
import { mdiGithub, mdiTwitter, mdiEmail, mdiLinkedin } from "@mdi/js";

import NavBar from "./components/NavBar";

export const metadata = {
  title: {
    default: "Sze Tyng Lee",
    template: "Sze Tyng Lee | %s",
  },
  description: "Sze Tyng Lee's personal website",
};

export default function RootLayout({ children }) {
  const socials = [
    {
      link: "https://github.com/szetyng",
      text: "github",
      icon: mdiGithub,
      color: "text-default",
    },
    {
      link: "https://twitter.com/szetyng",
      text: "twitter",
      icon: mdiTwitter,
      color: "blue-400",
    },
    {
      link: "https://www.linkedin.com/in/leeszetyng/",
      text: "linkedin",
      icon: mdiLinkedin,
      color: "blue-700",
    },
    {
      link: "mailto:lee.szetyng@gmail.com",
      text: "email",
      icon: mdiEmail,
      color: "green-700",
    },
  ];

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        {children}

        <footer className="text-center py-3 text-sm text-text-subtitle mt-auto flex flex-col gap-3">
          <div className="flex justify-center gap-8">
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={social.link}
                  className="hover:text-neon-magenta transition-colors"
                >
                  <Icon path={social.icon} title={social.text} size={1} />
                </a>
              );
            })}
          </div>
          <p>
            &copy; {new Date().getFullYear()} Sze Tyng Lee. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
