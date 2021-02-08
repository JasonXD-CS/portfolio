import React from 'react';
import Landing from 'components/landing/Landing'
import Introduction from 'components/intro/Introduction'
import Experience from 'components/experience/Experience'
import ProjectSection from 'components/projects/ProjectSection'
import Footer from 'components/footer/Footer'

function App() {
  return (
    <div>
      <Introduction></Introduction>
      <Experience></Experience>
      <ProjectSection></ProjectSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
