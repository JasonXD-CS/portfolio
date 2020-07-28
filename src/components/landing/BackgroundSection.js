import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaArrowAltCircleDown } from "react-icons/fa";

const picture = require('static/jwxd.jpeg')

const BackgroundImage = styled.div`
    position: relative;
    margin: 30px 30px;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    width: ${props => props.width};
    height: ${props => props.height};
    background: url(${props => props.image});
    background-size: cover;
    background-position: center
`

const TitleSection = styled.div`
    display: inline-block;
    color: white;
    font-size: 50px;
    font-weight: 500;
    position: absolute;
    top: 25%;
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