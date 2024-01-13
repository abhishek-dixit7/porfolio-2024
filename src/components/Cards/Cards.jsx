import React from 'react';
import useWebsitePreview from '../../hooks/useWebsitePreview';
import { projects } from '../../constants/constants';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="my-8 md:my-12 lg:my-12 lg:mx-64 grid lg:grid-cols-2 gap-8 place-content-center place-items-center">
      {projects.map(project => (
        <Link
          key={Math.random() * 100}
          to={project.url}
          className="relative w-[20rem] h-[15rem] md:w-[32rem] md:h-[24rem] lg:w-[32rem] lg:h-[24rem] "
        >
          <img
            ref={useWebsitePreview(project.url)}
            alt="todo-theme-switcher"
            className="object-cover hover:blur-sm rounded-md"
          />
          <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-center gap-6  md:opacity-0 lg:opacity-0 transition duration-[180ms] ease-in hover:opacity-100 hover:bg-black/[0.8] bg-black/[0.4] md:bg-none lg:bg-none">
            <h1 className="text-xl font-bold md:text-xl lg:text-xl text-white">
              {project.name}
            </h1>
            <div className="flex gap-2 mb-8 md:mb-16 lg:mb-16">
              {project.techStack &&
                project.techStack.map(tech => (
                  <span
                    key={Math.random() * 100}
                    className="text-sm font-[500] border border-gray-400 rounded-md px-2 py-1 bg-blue-200 text-black"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
