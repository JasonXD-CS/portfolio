import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowAltCircleDown } from "react-icons/fa";

const picture = require('static/jwxd.jpeg')

const BackgroundImage = styled.div`
    margin: 30px 30px;
    display: inline-block;
    overflow: hidden;
    width: ${props => props.width};
    height: ${props => props.height};
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    top: 10vh;
`
const LandingSection = styled.div`
`

const TitleSection = styled.div`
    display: inline-block;
    position: absolute;
    top: 20%;
    color: white;
    font-size: 50px;
    font-weight: 500;
    margin-left: 60px;
    text-align: center;
`
const Text = styled.p``

const ChevronKeyFrames = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(30px);
  }
`;

const AnimatedChevron = styled(FaArrowAltCircleDown)`
  font-size: 48px;
  margin-top: 5%;
  animation: ${ChevronKeyFrames} 2s ease-in-out 0s infinite;
  cursor: pointer;
  color: white;
`;

const BackgroundSection = (props) => {
    return <div>
        <BackgroundImage image={picture} width={props.width} height={props.height} >
        </BackgroundImage>
        <TitleSection>
            <Text>Hello, I'm Jason Wu</Text>
            <Text>and I'm a Software developer</Text>
            <AnimatedChevron></AnimatedChevron>
        </TitleSection>
    </div>
}

export default BackgroundSection