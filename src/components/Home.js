
import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCode, FaServer } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

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

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background-color: transparent;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 80%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 6rem;
    wd
  }
`;

const TextSection = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  padding: 1.5rem;
  max-width: 700px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Greeting = styled.div`
  font-size: 1.25rem;
  color: #64ffda;
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, #64ffda, #64ffda);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.2s forwards;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.4s forwards;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.6s forwards;

  strong {
    color: #64ffda;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.8s forwards;

  div {
    padding: 0.5rem 1rem;
    background: rgba(100, 255, 218, 0.1);
    border-radius: 9999px;
    color: #64ffda;
    font-size: 0.875rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(100, 255, 218, 0.2);
    }
  }
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 1s forwards, ${float} 6s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 300px;
    height: 350px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 20px;
    background: linear-gradient(45deg, #64ffda, transparent, #64ffda) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: ${shimmer} 2s infinite linear;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 1s forwards;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.a`
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.primary ? '#000000' : '#64ffda'};
  background: ${props => props.primary ? 'linear-gradient(45deg, #64ffda, #64ffda)' : 'transparent'};
  border: ${props => props.primary ? 'none' : '2px solid #64ffda'};
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 1.2s forwards;

  a {
    font-size: 1.75rem;
    color: #cbd5e1;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.1);

    &:hover {
      color: #64ffda;
      transform: translateY(-3px);
      background: rgba(100, 255, 218, 0.2);
    }
  }
`;



const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <HomeContainer>
      <ContentWrapper>
        <TextSection>
          <Greeting>👋 Hello, I'm</Greeting>
          <Title>Basavaraju VB</Title>
          <Subtitle>Full Stack Developer & Problem Solver</Subtitle>
          <Description>
            I'm a passionate developer focused on creating <strong>exceptional digital experiences</strong>. 
            Specializing in building robust, scalable web applications using modern technologies. 
            With expertise in both frontend and backend development, I transform complex problems into 
            elegant solutions that prioritize <strong>user experience</strong> and <strong>performance</strong>.
          </Description>
          <TechStack>
            <div><FaCode/>Full Stack Developer</div>
            <div><FaCode /> Frontend Developer</div>
            <div><FaServer /> Backend Developer</div>
          </TechStack>
          <ButtonContainer>
            <Button 
             // href="https://drive.google.com/file/d/1HZu-XOFRsjm8p_e3wjSM749ENPd-BINw/view?usp=sharing"
              // href="https://drive.google.com/file/d/1Dmk9XfjM5tz4CZ5TTmDXb38AtaQ7sjKA/view?usp=drive_link"
              href="https://drive.google.com/file/d/1XoLCBWEDgpZAAGur2CmoGgg-M81uX6pU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              View Resume <FaArrowRight />
            </Button>
            <Button href="#projects">
              Explore Projects
            </Button>
          </ButtonContainer>
        </TextSection>
        <ImageContainer>
               

          <img src="https://res.cloudinary.com/dmbkkv5ko/image/upload/v1759509253/Basavaraju_Photo_nviyqe.jpg" alt="Raju Nalagamdinne" />
        </ImageContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
  // https://res.cloudinary.com/dwiq4s5ut/image/upload/v1732218444/Profile_pic_jdz5zm.jpg
