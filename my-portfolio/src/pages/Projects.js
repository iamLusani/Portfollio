import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard"; // Ensure this import matches your file structure

const projects = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionHeader>
        <h2>Our Projects</h2>
      </SectionHeader>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

export default Projects;
