import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode,FaBrain, FaUsers, FaLightbulb, FaRocket, FaDatabase, FaPuzzlePiece, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const reasons = [
  { icon: FaCode, title: "Full-Stack Expertise", text: "Proficient in MERN Stack with a track record of delivering robust, scalable applications" },
  { icon: FaDatabase, title: "Data-Driven Development", text: "Strong skills in JavaScript, Python, and SQL. Experienced in optimizing database performance and data structures" },
  { icon: FaUsers, title: "Collaborative Team Player", text: "Excellent communication skills with a history of successful cross-functional collaboration" },
  { icon: FaLightbulb, title: "Innovative Problem Solver", text: "Proven ability to tackle complex challenges with creative, efficient solutions" },
  { icon: FaRocket, title: "Rapid Learner & Adaptor", text: "Quick to master new technologies and methodologies, ensuring cutting-edge solutions" },
  { icon: FaPuzzlePiece, title: "Scalable Solution Architect", text: "Passionate about creating efficient, maintainable, and scalable code architectures" },
  { icon: FaChartLine, title: "Performance Optimizer", text: "Skilled at identifying and resolving bottlenecks to enhance application speed and efficiency" },
  { icon: FaShieldAlt, title: "Security-Conscious Developer", text: "Prioritize robust security practices in all stages of development to protect sensitive data" },
  {
    icon: FaBrain,
    title: "AI & ML Enthusiast",
    text: "Experienced in implementing machine learning solutions and integrating AI-powered features into applications"
  }
];

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: transparent;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-right:60px;
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;

    &::after {
      width: 80px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const ReasonCard = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  background: rgba(100, 255, 218, 0.03);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    background: rgba(100, 255, 218, 0.05);
    box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #64ffda;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    max-width: 100%;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ReasonTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ReasonText = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const WhyHireMe = () => {
  return (
    <Container>
      <Title>Why Hire Me?</Title>
      <Grid>
        {reasons.map((reason, index) => (
          <ReasonCard key={index} index={index}>
            <IconWrapper>
              <reason.icon />
            </IconWrapper>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonText>{reason.text}</ReasonText>
          </ReasonCard>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyHireMe;