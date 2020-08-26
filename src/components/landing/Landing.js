import React from 'react';
import 'css/App.css';
import styled from 'styled-components'
import Header from 'components/landing/header' 
import BackgroundSection from 'components/landing/BackgroundSection'

const LandingWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

function Landing() {
  return (
    <LandingWrapper>
      <Header></Header>
      <BackgroundSection width="804px" height="608px"></BackgroundSection>
    </LandingWrapper>
  );
}


export default Landing