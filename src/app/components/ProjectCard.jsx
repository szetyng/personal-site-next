import { useState } from "react";
import Image from "next/image";

import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, repoLink, links = [] }) => {
  const [showDescription, setShowDescription] = useState(false);

  const imageUrl = require(`../../assets/images/portfolio/${image}`).default;

  return (
    <>
      <div className="bg-white rounded flex flex-col h-[320px] border">
        <div className="relative overflow-hidden border-b">
          <div
            className="relative group cursor-pointer"
            onClick={() => setShowDescription(true)}
          >
            <Image
              src={imageUrl}
              alt={`Cover image for ${title} project`}
              height={245}
              className="object-contain my-auto mx-auto rounded"
            />
            <div className="absolute inset-0 rounded bg-white bg-opacity-0 group-hover:bg-opacity-40 transition-opacity ease-in-out duration-300 "></div>
          </div>

          <div
            className={`absolute left-0 w-full h-full bg-white p-8 rounded overflow-y-auto transition-translate duration-300 top-full ${
              showDescription ? "-translate-y-full" : ""
            }`}
          >
            <button
              className="top-3 right-3 absolute rounded-full px-2 py-0 hover:bg-shadow-light"
              onClick={() => setShowDescription(false)}
            >
              <span className="text-xl font-bold">x</span>
            </button>
            <p
              className="project-description text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>

        <div className="flex flex-col grow justify-between px-4 mb-2">
          <h3 className="text-xl font-medium px-2 lowercase">{title}</h3>
          <a
            href={repoLink}
            target="__blank"
            className="py-1 px-2 w-fit hover:bg-orange-700 hover:bg-opacity-10 text-orange-700 text-sm font-semibold rounded"
          >
            github
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
