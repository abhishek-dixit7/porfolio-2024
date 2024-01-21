import React from 'react';
import Goto from '../components/Goto/Goto';

function Home() {
  return (
    <div className="my-16 text-sm md:text-lg lg:text-lg">
      <h1 className="text-sm md:text-2xl lg:text-2xl mb-4">
        Unfurl the layers of code and creativity that bring these pixels to
        life.{' '}
        <span className="text-2xl md:text-4xl lg:text-4xl hover:text-blue-500">
          I'm Abhishek Dixit
        </span>
        , a full-stack developer with a three-year odyssey through the digital
        wilderness. My portfolio is a map of my adventures, each project a
        monument to collaboration and innovation.
      </h1>

      <p className="text-lg md:text-2xl lg:text-2xl mx-4 mb-1">
        Venture beyond the surface. Within these lines, you'll find:
      </p>

      <ul className="text-sm md:text-lg lg:text-lg list-disc mx-8 mb-4">
        <li>
          Front-end artistry: Where vibrant pixels dance to the rhythm of
          design, crafting interfaces that captivate and convert.
        </li>

        <li>
          Back-end muscle: The invisible engine that hums beneath the surface,
          ensuring seamless performance and rock-solid security.
        </li>

        <li>
          Full-stack fusion: The magic that binds them, where pixels morph into
          pipelines and ideas solidify into reality.
        </li>
      </ul>

      <p className="mx-4 mb-4">
        But my portfolio is more than just code. It's a testament to the power
        of partnership. Let's unlock the potential of your next project
        together. I'm not just a developer, I'm your digital co-pilot, ready to
        navigate the complexities of the web and propel your vision to the
        forefront.
      </p>
      <p className="mx-4 mb-4">
        So, dive deeper. Ask questions. Let's spark a conversation and ignite
        the embers of your next digital masterpiece. Because behind these
        pixels, there's a world waiting to be built. And I, Abhishek Dixit, am
        ready to be your guide.
      </p>
      <p className="mb-4 hover:text-blue-500">
        Ready to embark on this adventure? Let's start exploring.
      </p>
      <Goto text="Know more about me" to="/about" />
    </div>
  );
}

export default Home;
