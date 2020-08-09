import React from 'react'
import styled from 'styled-components'
import Card from './ProjectCard'
import ProjectJumbo from './ProjectJumbo'

const ProjectWrapper = styled.div`
    min-height: 100vh;
    background-color: #232361;
    padding: 50px;
`
const ProjectSectionTitle = styled.h1`
    text-align: center;
    padding: 40px;
    font-size: 60px;
    color: #c4fff1;
`

const ProjectCardSection = styled.div`
    margin: 20px 200px

`

const projects = [
    {
        'projectName': 'Snowly',
        'description': ['• Application in WeChat that allows user to view up-to-date snow condition of their favorite ski resorts',
    '• Utilized Docker to containerize project as two microservices for scrapper and server',
    '• Fetched snow condition data by utilizing API and web scraping from ski resort website with Node.js/ Cheerio',
    '• Built RESTful API with Node and Express that sends snow condition data to display on the front end',
    '• Contributed to npm package “snow-forecast-sfr” to fix the incorrect forecast data'],
        'techStack': ['Node.js', 'Docker', 'Express', 'AWS', 'Vue.js', 'MongoDB'],
    },
    {
        'projectName': 'Parking Payment app',
        'description': ['• Hybrid application built with React Native, allow user to scan QRCode for payment',
        '• Built backend with Node.js and Express to handle routes and generate unique QRCode for parking lot',
        '• Connected application to MongoDB to store parking lot information when user submit registration form'],
        'techStack': ['React Native', 'MongoDB', 'Node.js', 'express'],
    },
    {
        'projectName': 'Portfolio',
        'description': ['Personal portfolio website built using React.js, there\'s still a lot to be improved. I have some cool ideas', 
        ' in mind to make it look better. Stay tuned!'],
        'techStack': ['React.js', 'AWS'],
    },
]


const ProjectSection = () => {
    return <ProjectWrapper id='projects'>
        <ProjectSectionTitle>Personal Projects</ProjectSectionTitle>
        <ProjectCardSection>
            {
            projects.map((item) => <ProjectJumbo detail={item}></ProjectJumbo>   )
            }
        </ProjectCardSection>

    </ProjectWrapper>
}

export default ProjectSection