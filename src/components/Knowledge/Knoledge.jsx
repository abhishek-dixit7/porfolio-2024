import React from 'react';

function Knoledge() {
  return (
    <section className="my-12">
      <h2 className="text-4xl mb-8 text-center hover:text-red-600 ">
        Knowledge
      </h2>

      <section>
        <div className="flex text-3xl hover:text-blue-500 items-center">
          Languages & Scripts
        </div>
        <p className="flex items-center mx-2 my-4  px-4 text-lg border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          Javascript, C#, Python, HTML, CSS, SQL
        </p>
      </section>

      <section>
        <div className="flex text-3xl hover:text-blue-500  items-center">
          Libraries & Frameworks
        </div>
        <p className="flex items-center mx-2 my-4  px-4 text-lg border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          ReactJS, NodeJS, ExpressJS, NextJS, .NET, .NET MVC
        </p>
      </section>

      <section>
        <div className="flex text-3xl hover:text-blue-500 items-center">
          Cloud & DevOps
        </div>
        <p className="flex items-center mx-2 my-4  px-4 text-lg border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          Azure DevOps, Azure App Services, Azure Functions, Azure Key Vault,
          Azure APIM, Azure SQL, Azure PostgreSQL, Azure Storage, Azure Entra
          ID, CI/CD Pipelines
        </p>
      </section>

      <section>
        <div className="flex text-3xl hover:text-blue-500 items-center">
          Others
        </div>
        <p className="flex items-center mx-2 my-4  px-4 text-lg border-l-[5px] border-solid border-black dark:border-white hover:border-red-600">
          Material-UI, Git, JSON, MSAL, REST APIs, SQL PostgreSQL, Docker, Cloud
          Development/Architecture.
        </p>
      </section>
    </section>
  );
}

export default Knoledge;
