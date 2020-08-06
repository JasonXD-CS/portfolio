import React from 'react'
import styled from 'styled-components'
import ProfilePicture from 'static/jason_profile.png'

const IntroSection = styled.div`
    background-color: #f7f7cb;
    height: 100vh;
`

const ProfileContainer = styled.div`
  display: flex;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${ProfilePicture});
  width: 500px;
  height: 500px;
`
const AboutSectionContainer = styled.div`
    display: flex;
    text-align: center;
    padding: 10%
`;

const AboutTextContainer = styled.div`
    position: relative;
    max-width: 50vh;
    margin-top: 5%;
    margin-left: 20%
`

const AboutText = styled.p`
    margin-top: 15px;
    font-weight: 500
`

const Introduction = () => {
    return <IntroSection>
        <AboutSectionContainer  id="introduction">
            <ProfileContainer></ProfileContainer>
            <AboutTextContainer>
                <h1>Jason Wu</h1>
                <AboutText>Hi, I am a computer science student at Simon Fraser University. I'm a motivated person who loves learning
                    new technologies and building personal project that provides value to others. Currently working as a 
                    software engineer intern at SAP Concur in Vancouver. I love snowboarding during winter.
                </AboutText>
            </AboutTextContainer>
        </AboutSectionContainer>
    </IntroSection>
}

export default Introduction