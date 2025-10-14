import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiBootstrap, SiFirebase } from 'react-icons/si';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26',  },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', },
  { name: 'React', icon: FaReact, color: '#61DAFB',  },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933',  },
  { name: 'Python', icon: FaPython, color: '#3776AB', },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', },
  { name: 'Express', icon: SiExpress, color: '#ffffff',},
  { name: 'SQL', icon: FaDatabase, color: '#4479A1', },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', },
];

const Container = styled.section`
  position: relative;
  padding: 0rem 0;
  background: transparent;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
  }
//linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent)
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                 0 0 20px rgba(100, 255, 218, 0.3),
                 0 0 30px rgba(100, 255, 218, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.5),
                 0 0 30px rgba(100, 255, 218, 0.5),
                 0 0 40px rgba(100, 255, 218, 0.5);
  }
`;

const Title = styled.h2`
   font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

// Static grid instead of animated track
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 900px; /* fits 3 columns nicely */
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    max-width: 600px;
  }
`;

// Removed floating/shine animations for instant visibility

const SkillCard = styled.div`
  flex: 0 0 auto;
  min-height: 160px;
  margin: 0;
  background: rgba(17, 34, 64, 0.6);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  border: 2px solid transparent;
  background-image: none;

  &:hover {
    border-color: rgba(100, 255, 218, 0.5);
    background-color: rgba(17, 34, 64, 0.8);
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #64ffda, #0a192f, #64ffda);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Removed rotate animation

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  transition: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, ${props => props.color}20, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  &.icon {}
`;

const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e6f1ff;
  margin: 0.5rem 0;
  text-align: center;
`;

// Removed hidden level animation

const SkillsContainer = styled.div`
  position: relative;
  overflow: visible;
  padding: 1rem 0;
  margin: 1rem 0;
`;

const Skills = () => {
  return (
    <Container>
      <Title>Technical Expertise</Title>
      <SkillsContainer>
        <SkillsGrid>
          {skills.slice(0, 9).map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon color={skill.color} className="icon">
                {React.createElement(skill.icon)}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
