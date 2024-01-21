import React from 'react';
import useWebsitePreview from '../../hooks/useWebsitePreview';
import { projects } from '../../constants/constants';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="my-8 md:my-12 md:mx-8 grid lg:grid-cols-2 min-[1920px]:grid-cols-3 gap-8 place-content-center place-items-center">
      {projects.map(project => (
        <Link key={Math.random() * 100} to={project.url} className="relative">
          <img
            ref={useWebsitePreview(project.url)}
            alt="todo-theme-switcher"
            className="object-cover hover:blur-sm rounded-md"
          />
          <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-end items-center gap-6 md:opacity-0 transition duration-[180ms] ease-in hover:opacity-100 hover:bg-black/[0.8] bg-black/[0.4] md:bg-none ">
            <h1 className="text-base font-bold md:text-lg lg:text-xl min-[1920px]:text-2xl text-white">
              {project.name}
            </h1>
            <div className="flex gap-2 mb-8 md:mb-16">
              {project.techStack &&
                project.techStack.map(tech => (
                  <span
                    key={Math.random() * 100}
                    className="text-xs font-[500] border border-gray-400 rounded-md px-1 py-0.5 md:px-2 md:py-1 md:text-sm min-[1920px]:text-xl bg-blue-200 text-black"
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
