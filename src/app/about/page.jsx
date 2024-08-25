import profilePic from "../../assets/images/bios/szetyng-sq.png";

const AboutMe = () => {
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
                    className="mr-2 pb-1 hover:pb-0 hover:border-b border-dashed border-b-off-blue hover:text-off-blue"
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
            <p>
              I am an electrical and electronic engineering graduate from
              Imperial College London. Throughout my four years in university, I
              have developed a keen interest in software development. One of my
              fondest collaborations from my time in Imperial was a project with
              Microsoft to build a Visual Studio Code extension geared towards
              data scientists. It provided notebook-like functionalities within
              the code editor itself, and has since been integrated with
              Microsoft's official Python extension as part of its data science
              features!
            </p>
            <p>
              I am now a software developer in Double Eleven, where I am part of
              the Systems Development team. We have been developing numerous
              software solutions to improve tunnelling productivity; among them
              is a cloud-based data visualisation web app built using Python
              FastAPI, Vue.js and Firebase, running on Google Cloud Platform.
            </p>
            <p>
              Some of my interests include contemporary musicals, reading,
              history and coffee. In my free time nowadays, I like experimenting
              with filter coffee. I started brewing my own coffee in my fourth
              year of uni, having decided that I've been spending too much money
              on flat whites from the library cafe! My first brewer was an
              Aeropress, but I very quickly got myself a V60 dripper and after a
              couple of years, I am now a proud owner of a French press.
            </p>
            <p>
              I also like to write. I have been keeping a journal since my first
              year of university, and I took a creative writing class back in
              2018. Writing is not something that I do often anymore, but I
              would like to get it started again so I am challenging myself to
              write by adding a blog section to my website.
            </p>
            <p>
              As software developers, our careers truly involve lifelong
              learning as new technologies keep coming into play every year.
              Sometimes it's not even about new technologies, but old,
              time-tested fundamentals that are new to us either because we have
              just stumbled upon them or their importance has recently become
              known to us. Either way, whatever it is that I'm learning, I am
              going to write about it in my blog - partly for me, since writing
              things down helps me better understand the material, and partly
              for whoever is going to encounter the same topic in the future.
            </p>
            <p>
              Anyway, that's enough about me for now! Feel free to contact me at
              lee.szetyng@gmail.com if you would like to take a look at my CV.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
