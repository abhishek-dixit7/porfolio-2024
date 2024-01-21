import React from 'react';
import Playlist from '../components/Playlist/Playlist';
import Experience from '../components/Experience/Experience';
import Knoledge from '../components/Knowledge/Knoledge';
import Goto from '../components/Goto/Goto';

function About() {
  return (
    <div className="my-16 text-sm md:text-lg lg:text-lg">
      <h1 className="text-5xl md:text-7xl lg:text-7xl mt-12 text-center hover:text-blue-600">
        About.
      </h1>
      <Experience />
      <Knoledge />
      <Playlist />
      <Goto text="Explore my projects" to="/projects" />
    </div>
  );
}

export default About;
