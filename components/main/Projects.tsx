import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Learning model system ('Currently in progress')"
          description="An Online Learning Management System (LMS) allows users to create, manage, and deliver online courses."
        />
        <ProjectCard
          src="/WebsiteImage.png"
          title="Ecommerce Website UI/UX"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        




        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Welcome to my cosmic corner of the web, where creativity knows no bounds. Embark on a journey through the galaxies of my portfolio."
        />

      </div>
    </div>
  );
};

export default Projects;


// import React from "react";
// import Link from 'next/link';
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/NextWebsite.png"
//           title="Modern Learning model system ('Currently in progress')"
//           description="An Online Learning Management System (LMS) allows users to create, manage, and deliver online courses."
//         />
//         <Link href="https://samridhrana06.github.io/ecommerce_value/">
//           <a style={{ textDecoration: 'none' }}>
//             <ProjectCard
//               src="/WebsiteImage.png"
//               title="Ecommerce Website UI/UX"
//               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//             />
//           </a>
//         </Link>
//         <ProjectCard
//           src="/SpaceWebsite.png"
//           title="Space Themed Website"
//           description="Welcome to my cosmic corner of the web, where creativity knows no bounds. Embark on a journey through the galaxies of my portfolio."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

