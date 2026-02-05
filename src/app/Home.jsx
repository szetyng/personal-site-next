import profilePic from "../assets/images/bios/szetyng-sq.png";
import { getIntroContent } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./Home.css";

const Home = () => {
  const introData = getIntroContent();

  const getImgUrl = (name) => {
    let url = new URL(`../assets/images/skills-icons/${name}`, import.meta.url)
      .href;
    return url;
  };

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

  const skills = [
    // {text: 'android', link: 'devicon-android-plain'},
    // {text: 'bootstrap', link: 'devicon-bootstrap-plain-wordmark'},
    // { text: "cplusplus", link: "devicon-cplusplus-plain-wordmark" },
    { text: "docker", link: "devicon-docker-plain-wordmark" },
    { text: "fastapi" },
    // { text: "fsharp" },
    { text: "git", link: "devicon-git-plain" },
    { text: "golang", link: "devicon-go-original-wordmark" },
    { text: "googlecloudplatform" },
    { text: "javascript", link: "devicon-javascript-plain" },
    { text: "mongodb", link: "devicon-mongodb-plain-wordmark" },
    { text: "nodejs", link: "devicon-nodejs-plain-wordmark" },
    // {text: 'nuxtjs'},
    { text: "postgresql", link: "devicon-postgresql-plain-wordmark" },
    { text: "python" },
    { text: "react", link: "devicon-react-original-wordmark" },
    // { text: "solidity" },
    { text: "typescript", link: "devicon-typescript-plain" },
    { text: "vuejs", link: "devicon-vuejs-plain-wordmark" },
  ];

  const renderAnySkill = (skill) => {
    let skillDiv;
    if (skill.link) {
      skillDiv = renderDevIcon(skill.link);
    } else {
      skillDiv = renderSvg(skill.text);
    }

    return (
      <div
        key={skill.text}
        className="flex flex-col gap-1 items-center justify-center group"
      >
        {skillDiv}
        <p className="text-center text-xs font-bold invisible group-hover:visible">
          {skill.text}
        </p>
      </div>
    );
  };

  const renderSvg = (name) => (
    <i key={name} className={`h-[50px] w-[50px] inline-block icon-${name}`}></i>
  );

  const renderDevIcon = (name) => (
    <div key={name} className="w-[50px] text-[50px]">
      <i className={`inline-block ${name} colored`}></i>
    </div>
  );

  return (
    <>
      <div className="flex justify-center">
        <div className="md:px-20 px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row rounded py-2 gap-6">
            <div className="flex flex-col md:w-2/5 w-full items-center">
              <img
                src={profilePic.src}
                alt="picture of me looking at a map in a cobbled street in italy"
                className="rounded-full w-64"
              />
              <div className="grow"></div>
              <h2 className="text-md text-center font-semibold text-text-subtitle mt-2 ">
                software developer
              </h2>
            </div>
            <div className="flex flex-col gap-2 md:w-3/5 w-full">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                  p: ({ children }) => (
                    <p className="mb-2 lowercase">{children}</p>
                  ),
                  span: ({ children }) => (
                    <span className="text-blue-nine lowercase font-semibold">
                      {children}
                    </span>
                  ),
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-neon-magenta hover:border-b border-dashed border-b-neon-magenta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {introData.content}
              </ReactMarkdown>
              <div className="flex flex-wrap gap-2 mt-1">
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
          </div>
          <hr className="border-t border-t-gray-300 my-4" />
          <div className="flex flex-col md:flex-row gap-8 rounded py-2">
            <div className="flex flex-col md:w-2/5 w-full">
              <h1 className="text-2xl font-semibold">skills</h1>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:w-3/5 leading-10">
              {skills.map((skill) => renderAnySkill(skill))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
