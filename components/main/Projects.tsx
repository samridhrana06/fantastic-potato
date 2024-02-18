import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col gap-10 px-10">
        <div className="flex flex-col md:flex-row gap-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Facial Emotion Detection Using machine learning and Haar Cascade"
            description="Facial Emotion Detection utilizes machine learning and Haar Cascade to recognize emotions from facial expressions, training models on datasets to classify emotions and leveraging Haar Cascade for detecting key facial features."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Portfolio"
            description="My passion for space exploration is evident in every aspect of this portfolio, reflecting my deep love and fascination for the cosmos,  Immerse yourself in my portfolio, where my profound love for space fuels every design and concept, inspired by the wonders of the cosmos."
          />
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Interactive website cards engage users with dynamic elements, fostering immersive experiences and enhanced user interaction within a digital interface, Interactive website cards combine visually appealing design with interactive elements, offering users a dynamic a."
          />
        </div>
        {/* <div className="flex flex-col md:flex-row gap-10">
          <ProjectCard
            src="/CardImage4.png"
            title="Project 4"
            description="Description for project 4."
          />
          <ProjectCard
            src="/CardImage5.png"
            title="Project 5"
            description="Description for project 5."
          />
          <ProjectCard
            src="/CardImage6.png"
            title="Project 6"
            description="Description for project 6."
          />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;