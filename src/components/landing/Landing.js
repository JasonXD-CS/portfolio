import React from 'react';
import 'css/App.css';
import Header from 'components/landing/header' 
import BackgroundSection from 'components/landing/BackgroundSection'

function Landing() {
  return (
    <div className="Landing">
      <Header></Header>
      <BackgroundSection width="804px" height="608px"></BackgroundSection>
    </div>
  );
}


export default Landing