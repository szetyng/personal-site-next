"use client";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  const projectList = [
    {
      title: "Spotify Unwrapped",
      description:
        "\
      A Data Studio dashboard that aims to recreate Spotify Wrapped, and includes additional custom in-depth \
      analytics to it. Github link points to a simple Gist of the Python script used to help prepare the\
      data for Data Studio.\
      ",
      url: "https://gist.github.com/szetyng/fedbb9008e8b607e4e4ad958b6ab657b",
      links: [
        {
          url: "https://lookerstudio.google.com/s/qlBNQmUEpHc",
          color: "grey darken-2",
          title: "Dashboard",
        },
        {
          url: "https://www.szetyng.com/blog/spotify-unwrapped",
          color: "grey darken-2",
          title: "Website",
        },
      ],
      imgSrc: "spotify-page.png",
      expand: false,
    },
    {
      title: "WW Metaverse Slayer",
      description:
        "\
      Simple turn-based NFT game built using Solidity. Each player\
      mints a Wizarding World character NFT that they can use to attack the Big Boss, Tom Riddle. The logic of the game is stored in a \
      smart contract that has been deployed on the Ethereum blockchain (on the Rinkeby test network), whereas the UI of the game is a\
      React.js web app written and hosted on <a href='https://replit.com/~' target='_blank'>replit</a>.  \
      ",
      url: "https://github.com/szetyng/NFT-magical-game",
      links: [
        {
          url: "https://nft-game-starter-project.szetyngtyng.repl.co/",
          color: "grey darken-2",
          title: "Website",
        },
      ],
      imgSrc: "metaverse-slayer.png",
      expand: false,
    },
    {
      title: "Guardrails",
      description:
        "\
      Designed and built a multi-agent system simulator in F# to investigate the effects of having minimal \
      recognition of rights to self-organise (i.e. guardrails) on the sustainability of electronic institutions. Using \
      the method of sociologically-inspired computing, these institutions are designed according to the \
      <a href='https://en.wikipedia.org/wiki/Elinor_Ostrom#Design_principles_for_Common_Pool_Resource_(CPR)_institution' target='_blank'>principles</a> \
      proposed by political economist, Elinor Ostrom.\
      ",
      url: "https://github.com/szetyng/Guardrails",
      links: [
        {
          url: "https://drive.google.com/open?id=1fzMeVbB9MzWxGHrpk6X85kNun_6NYvJ8OUVmduqiQtc",
          color: "grey darken-2",
          title: "Slides",
        },
      ],
      imgSrc: "institution.jpg",
      expand: false,
    },
    {
      title: "CaterPillar",
      description:
        "\
          Developed a smart pill organiser to improve pill adherence and reduce medication errors among \
          the elderly. The CaterPillar system involves an electronic pillbox and Android applications for \
          tablets and smartwatches. It learns to provide adaptive reminders based on data regarding the \
          user's daily routines.\
      ",
      url: "https://github.com/szetyng/CaterPillar",
      links: [
        {
          url: "https://youtu.be/Fv4SDEJEMSU",
          color: "grey darken-2",
          title: "Demo Video",
        },
      ],
      imgSrc: "caterpillar.png",
      expand: false,
    },
    {
      title: "neuron",
      description:
        "\
        Collaborated with Microsoft to create an extension for Visual Studio Code, which has since been \
        <a href='https://blogs.msdn.microsoft.com/pythonengineering/2018/11/08/data-science-with-python-in-visual-studio-code/?fbclid=IwAR3M5REwXMSCxgCCiqKez_cMJr4WVYYy1DA3UjjjnhpNGDluQiSo4GnhBk0' target='_blank'>incorporated into their Python extension</a> \
        as part of their Data Science features. It combines the \
        rich experience of using the code editor with the interactive programming model of Jupyter notebook.\
      ",
      url: "https://github.com/neuron-team/vscode-ipe",
      links: [
        {
          url: "https://youtu.be/amuV0z9eVg4",
          color: "grey darken-2",
          title: "Demo Video",
        },
      ],
      imgSrc: "neuron.png",
      expand: false,
    },
    {
      title: "Spam Detection",
      description:
        "\
        Applied the theory learned in Introduction to Machine Learning to classify emails as either spam or ham.\
      ",
      url: "https://github.com/szetyng/machine-learning-spam",
      imgSrc: "laptop.png",
      expand: false,
    },
    {
      title: "ARM Emulator",
      description:
        "\
        Wrote and fully tested an ARM emulator in F#. The programme is able to parse and consecutively simulate a subset of the \
        ARM UAL instructions. Aimed to recreate <a href='https://salmanarif.bitbucket.io/visual/' target='_blank'>VisUAL</a>, \
        a visual ARM emulator used in Introduction to Computer Architecture in Imperial College London as an aide in teaching the \
        ARM assembly language.\
      ",
      url: "https://github.com/szetyng/HLP5",
      imgSrc: "arm-emulator.png",
      expand: false,
    },
    {
      title: "AceCaddie",
      description:
        "\
        Used an accelerometer to build an IoT device that tracks golf scores automatically when it is \
        attached to the golf club in use. The accompanying mobile app allows friends to compete against each other.\
      ",
      url: "https://github.com/szetyng/embedded",
      links: [
        {
          url: "https://dharshana1407.wixsite.com/acecaddie",
          color: "grey darken-2",
          title: "Website",
        },
      ],
      imgSrc: "acecaddie.png",
      expand: false,
    },
    {
      title: "SortBot",
      description:
        "\
        Implemented a classifier that uses machine vision to sort items into four different recycling categories \
        for a self-sorting recycling machine. Aims to encourage recyling on the Imperial College London campus by \
        awarding points to users of the machine through an accompanying mobile app.\
      ",
      url: "https://github.com/szetyng/sortbot",
      links: [
        {
          url: "http://www.ee.ic.ac.uk/guo.liew15/yr2proj/default.htm",
          color: "grey darken-2",
          title: "Website",
        },
        {
          url: "https://szetyng.github.io/assets/videos/sortbot.mp4",
          color: "green darken-2",
          title: "App Demo",
        },
      ],
      imgSrc: "sortbot.png",
      expand: false,
    },
    {
      title: "2048",
      description:
        "\
        Recreated the popular 2048 game in C++.\
      ",
      url: "https://github.com/szetyng/2048",
      imgSrc: "2048.png",
      expand: false,
    },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="md:px-20 px-8 max-w-7xl">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectList.map((project) => {
              return (
                <ProjectCard
                  title={project.title}
                  image={project.imgSrc}
                  description={project.description}
                  repoLink={project.url}
                  links={project.links}
                  key={project.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
