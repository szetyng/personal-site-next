"use client";
import profilePic from "../assets/images/bios/szetyng-sq.png";

import "./Home.css";

const Home = () => {
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
    { text: "cplusplus", link: "devicon-cplusplus-plain-wordmark" },
    { text: "fastapi" },
    { text: "fsharp" },
    { text: "git", link: "devicon-git-plain" },
    { text: "googlecloudplatform" },
    { text: "javascript", link: "devicon-javascript-plain" },
    { text: "nodejs", link: "devicon-nodejs-plain-wordmark" },
    // {text: 'nuxtjs'},
    { text: "postgresql", link: "devicon-postgresql-plain-wordmark" },
    { text: "python" },
    { text: "react", link: "devicon-react-original-wordmark colored" },
    { text: "solidity" },
    { text: "vuejs", link: "devicon-vuejs-plain-wordmark" },
  ];

  const renderSvg = (name) => (
    <i className={`h-[50px] w-[50px] inline-block icon-${name}`}></i>
  );

  const renderDevIcon = (name) => (
    <div className="w-[50px] text-[50px]">
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
              <p className="text-justify">
                hi there! i'm <strong>sze tyng</strong>, an m.eng electrical and
                electronic engineering graduate from&nbsp;
                <span className="text-blue-500 font-semibold">
                  imperial college london
                </span>
                . i am now a&nbsp;
                <strong>software developer</strong> currently based in&nbsp;
                <span className="text-blue-500 font-semibold">
                  kuala lumpur, malaysia
                </span>
                . feel free to wander around and let me know what you think.
                this site was built using react + nextjs by yours truly.
              </p>
              <p className="text-justify">
                it started off as a <strong>portfolio</strong> to showcase some
                of my personal projects, and i eventually added a blog section
                to share some of my thoughts and musings with the world wide
                web!
              </p>
              <p className="text-justify break-words">
                my cv is available upon request, just drop me a message at&nbsp;
                <a
                  href="mailto:lee.szetyng@gmail.com"
                  className="border-b border-dashed border-b-text-default hover:text-off-blue hover:font-semibold"
                >
                  lee.szetyng@gmail.com
                </a>
                &nbsp;or contact me on any of the platforms linked below.
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {socials.map((social) => {
                  return (
                    <a
                      href={social.link}
                      target="_blank"
                      className="mr-2 pb-1 hover:pb-0 hover:border-b border-dashed border-b-off-blue hover:text-off-blue"
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
              {skills.map((skill) =>
                skill.link ? renderDevIcon(skill.link) : renderSvg(skill.text)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
