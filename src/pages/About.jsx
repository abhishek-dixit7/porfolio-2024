import React, { useState } from 'react';
import Playlist from '../components/Playlist/Playlist';
import { useLoaderData } from 'react-router-dom';
import Experience from '../components/Experience/Experience';
import Knoledge from '../components/Knowledge/Knoledge';

function About() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-7xl mt-12 text-center hover:text-blue-600">
        About.
      </h1>
      <Experience />
      <Knoledge />
      <Playlist />
    </>
  );
}

export default About;
