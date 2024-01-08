import React, { useState } from 'react';
import Playlist from '../components/Playlist/Playlist';
import { useLoaderData } from 'react-router-dom';
import Experience from '../components/Experience/Experience';
import Knoledge from '../components/Knowledge/Knoledge';

function About() {
  return (
    <>
      <Experience />
      <Knoledge />
      <Playlist />
    </>
  );
}

export default About;
