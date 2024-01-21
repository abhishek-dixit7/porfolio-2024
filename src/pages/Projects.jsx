import React from 'react';
import Cards from '../components/Cards/Cards';
import Goto from '../components/Goto/Goto';

function Projects() {
  return (
    <div className="my-16 text-sm md:text-lg">
      <h1 className="text-5xl md:text-7xl lg:text-7xl mt-12 text-center hover:text-blue-600">
        Projects.
      </h1>
      <Cards />
      <Goto text="Have any questions?" to="/contact" className="mx-8" />
    </div>
  );
}

export default Projects;
