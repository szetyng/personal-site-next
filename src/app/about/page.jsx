import profilePic from "../../assets/images/bios/szetyng-sq.png";
import { getAboutContent } from "../../lib/markdown";
import ReactMarkdown from "react-markdown";

export const metadata = {
  title: "About",
  description: "Sze Tyng Lee's about page",
};

const AboutMe = () => {
  const aboutData = getAboutContent();

  const socials = [
    {
      link: "https://github.com/szetyng",
      text: "github",
      icon: "",
      color: "text-default",
    },
    {
      link: "https://twitter.com/szetyng",
      text: "twitter",
      icon: "",
      color: "blue-400",
    },
    {
      link: "https://www.linkedin.com/in/leeszetyng/",
      text: "linkedin",
      icon: "",
      color: "blue-700",
    },
    {
      link: "mailto:lee.szetyng@gmail.com",
      text: "email",
      icon: "",
      color: "green-700",
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="md:px-20 px-8 flex flex-wrap max-w-7xl">
          <div className="flex flex-col md:w-2/5 w-full items-center">
            <img
              src={profilePic.src}
              alt="picture of me looking at a map in a cobbled street in italy"
              className="rounded-full w-64"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {socials.map((social) => {
                return (
                  <a
                    href={social.link}
                    target="_blank"
                    className="mr-2 pb-1 hover:pb-0 hover:border-b border-dashed border-b-neon-magenta hover:text-neon-magenta"
                    key={social.link}
                  >
                    <span className={`font-semibold text-sm`}>
                      {social.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-justify md:w-3/5 mt-6 md:mt-0">
            <ReactMarkdown
              components={{
                p: ({ children }) => <p className="mb-2">{children}</p>,
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mb-3">{children}</h2>
                ),
              }}
            >
              {aboutData.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
