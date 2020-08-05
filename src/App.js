import React from 'react';
import Landing from 'components/landing/Landing'
import Introduction from 'components/intro/Introduction'
import Experience from 'components/experience/Experience'
import ProjectSection from 'components/projects/ProjectSection'

function App() {
  return (
    <div>
      <Landing></Landing>
      <Introduction></Introduction>
      <Experience></Experience>
      <ProjectSection></ProjectSection>
    </div>
  );
}

export default App;
