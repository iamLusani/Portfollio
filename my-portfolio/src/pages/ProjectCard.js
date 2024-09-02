import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!project) {
    return <div>No project data available</div>;
  }

  return (
    <CardContainer onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="card"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", perspective: 1000 }}>
        {!isFlipped ? (
          <FrontFace>
            <h3>{project.title || "Untitled Project"}</h3>
          </FrontFace>
        ) : (
          <BackFace>
            <p>{project.description || "No description available"}</p>
          </BackFace>
        )}
      </motion.div>
    </CardContainer>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

ProjectCard.defaultProps = {
  project: {
    title: "Untitled Project",
    description: "No description available",
  },
};

const CardContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;
  cursor: pointer;
  perspective: 1000px;
`;

const Face = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const FrontFace = styled(Face)`
  background-color: #ff6f61;
`;

const BackFace = styled(Face)`
  background-color: #4a90e2;
  transform: rotateY(180deg);
`;

export default ProjectCard;
