import React from 'react';
import useWebsitePreview from '../../hooks/useWebsitePreview';
import { projects } from '../../constants/constants';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="my-8 md:my-12 lg:my-12 md:mx-32 lg:mx-32 grid md:grid-cols-2 lg:grid-cols-2 gap-4 place-content-center place-items-center">
      {projects.map(project => (
        <Link
          key={Math.random() * 100}
          to={project.url}
          className="relative w-[20rem] h-[15rem] md:w-[32rem] md:h-[24rem] lg:w-[32rem] lg:h-[24rem] "
        >
          <img
            /*ref={useWebsitePreview(project.url)}*/ src={localStorage.getItem(
              'preview',
            )}
            alt="todo-theme-switcher"
            className="absolute h-full w-full left-0 top-0 object-cover hover:blur-sm  rounded-md"
          />
          <div className="ml-4 mt-28 md:ml-12 lg:ml-12 md:mt-60 lg:mt-60 opacity-0 translate-y-10 transition opacity hover:opacity-100 ">
            <h1 className="text-base md:text-xl lg:text-xl font-normal mb-2 text-white">
              {project.name}
            </h1>
            <div className="flex gap-2 md:mt-4 lg:mt-4">
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
