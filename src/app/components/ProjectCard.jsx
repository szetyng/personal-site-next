import { Fragment, useState } from "react";
import Image from "next/image";

import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, repoLink, links = [] }) => {
  const [showDescription, setShowDescription] = useState(false);

  const imageUrl = require(`../../assets/images/portfolio/${image}`).default;

  return (
    <>
      <div className="bg-white rounded flex flex-col border">
        <div className="relative overflow-hidden border-b h-72">
          <div
            className="flex flex-col items-center h-full cursor-pointer select-none"
            onClick={() => setShowDescription(true)}
          >
            <Image
              src={imageUrl}
              alt={`Cover image for ${title} project`}
              height={245}
              className="object-contain my-auto mx-auto rounded"
              onClick={() => setShowDescription(true)}
            />
          </div>

          {showDescription && (
            <button
              className="top-3 right-3 absolute rounded-full px-2 py-0 z-10 hover:bg-shadow-light"
              onClick={() => setShowDescription(false)}
            >
              <span className="text-xl font-bold">x</span>
            </button>
          )}

          <div
            className={`absolute left-0 w-full h-full bg-white p-8 rounded overflow-y-auto transition-translate duration-300 top-full ${
              showDescription ? "-translate-y-full" : ""
            }`}
          >
            <p
              className="project-description text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>

            <div className="flex gap-2 mt-4 -mb-4">
              {links.map((l) => {
                return (
                  <Fragment key={l.url}>
                    <a
                      href={l.url}
                      target="__blank"
                      className={`py-1 hover:border-b border-dashed border-b-off-blue hover:text-off-blue lowercase text-sm font-semibold`}
                    >
                      {l.title}
                    </a>
                    <div className="border-r border-text-subtitle my-1 last:hidden"></div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 my-4 gap-3">
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
