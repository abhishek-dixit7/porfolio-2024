import React from 'react';

function Experience() {
  return (
    <section className="my-12 text-sm md:text-lg lg:text-lg">
      <h2 className="text-2xl md:text-4xl lg:text-4xl mb-8 text-center hover:text-red-600">
        Experience
      </h2>

      <section>
        <div className="flex text-xl md:text-3xl lg:text-3xl hover:text-blue-500 items-center">
          Cloud Engineer II - Insight, Gurugram
        </div>
        <p className="flex items-center mx-2 my-4 px-4  border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          In my role, I assumed the responsibility of guiding and orchestrating
          the entire development lifecycle, ensuring a seamless progression from
          project initiation to its triumphant completion. My hands-on approach
          involved overseeing each phase with meticulous attention to detail,
          ensuring that every aspect of the development process aligned with
          project goals and timelines. This comprehensive oversight contributed
          to the successful delivery of high-quality projects and the
          achievement of project milestones.
        </p>
        <p className="flex items-center mx-2 my-4 px-4  border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          To bolster project functionality and elevate performance, I
          strategically leveraged an expansive range of Azure Services. These
          included the cutting-edge Azure Open AI Service, which brought
          advanced artificial intelligence capabilities to the projects.
          Additionally, I utilized Azure Key Vault to enhance security measures,
          Azure PostgreSQL for robust database management, and Azure Document
          Intelligence for efficient document processing. This strategic
          utilization of Azure Services not only optimized project functionality
          but also positioned the projects to meet and exceed performance
          expectations, ultimately contributing to a more robust and
          sophisticated end product.
        </p>
      </section>

      <section>
        <div className="flex text-xl md:text-3xl lg:text-3xl hover:text-blue-500 items-center">
          Cloud Engineer I - Insight, Gurugram
        </div>
        <p className="flex items-center mx-2 my-4 px-4  border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          In my role, I dedicated myself to the meticulous crafting and
          deployment of cutting-edge web applications and REST APIs, a task that
          not only demonstrated my proficiency in a diverse set of technologies
          including JavaScript, ReactJS, C#, .NET, and Azure but also showcased
          a commitment to staying at the forefront of industry trends. This
          comprehensive skill set allowed me to not only meet but exceed project
          requirements, delivering innovative solutions that resonated with both
          clients and end-users. Furthermore, my engagement extended beyond
          development, encompassing the execution of DevOps methodologies. By
          harnessing the power of Azure services, I seamlessly integrated
          continuous improvement practices to elevate functionality, resulting
          in robust, scalable, and high-performance applications.
        </p>
        <p className="flex items-center mx-2 my-4 px-4  border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          To streamline and enhance the development and deployment processes, I
          strategically employed Azure DevOps. This involved the creation of
          pipelines for Continuous Integration and Continuous Deployment
          (CI/CD), enabling automated and error-free deployments. This
          meticulous approach not only ensured optimal efficiency but also
          guaranteed the accuracy and reliability of the development lifecycle.
          In addition, I actively fostered collaboration across multifunctional
          teams to facilitate a harmonious integration process. This
          collaborative effort was pivotal in guaranteeing a seamless flow of
          code and functionalities, ultimately contributing to an enhanced user
          experience and solidifying the success of the projects I was involved
          in.
        </p>
      </section>
    </section>
  );
}

export default Experience;
