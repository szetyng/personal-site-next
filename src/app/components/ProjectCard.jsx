"use client";
import { Fragment, useState } from "react";
import Image from "next/image";

import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  image,
  repoLink,
  skills = [],
  links = [],
}) => {
  const imageUrl = require(`../../assets/images/portfolio/${image}`).default;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 w-full px-4 pb-12 pt-4 border-b">
        <div className="flex flex-col gap-2 w-full md:w-2/5">
          <a
            href={repoLink}
            target="__blank"
            className="flex gap-1 items-center group hover:text-mint-green text-sm font-semibold rounded"
          >
            <h3 className="text-xl font-medium lowercase">{title}</h3>
            <span className="group-hover:pb-2 group-hover:font-bold transition-all">
              ↗
            </span>
          </a>

          <div className="flex items-center h-full select-none w-full">
            <Image
              src={imageUrl}
              alt={`Cover image for ${title} project`}
              height={245}
              className="object-contain my-auto mx-auto rounded"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-3/5">
          <div className="flex gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-mint-green/10 text-mint-green text-xs font-semibold py-1 px-2 rounded-full lowercase"
              >
                {skill}
              </span>
            ))}
          </div>

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
                    className={`py-1 hover:border-b border-dashed border-b-neon-magenta hover:text-neon-magenta lowercase text-sm font-semibold`}
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
    </>
  );
};

export default ProjectCard;
