/* eslint-disable no-multi-str */
import React from 'react'
import styled from 'styled-components'
import Jumbotron from './Jumbotron'

const ExperienceSection = styled.div`
    min-height: 100vh;
    background-color: #c4fff1;
`
const SectionTitle = styled.div`
    text-align: center;
    font-size: 60px;
    padding-top: 40px;
    margin-bottom: 40px;
    color: #232361;
`

const JumbotronSection = styled.div`
    padding-bottom: 50px;
`

const JumbotronContainer = styled.div`

`

const jobs = [
    {   
        'companyLogo': require('static/SAPconcurLogo.png'),
        'companyName': 'SAP Concur',
        'jobTitle': 'Software Engineer Intern - Backend',
        'jobDescription': 'Worked on next generation travel and expense software built in microservice architecture.\
        Automated sanity tests to ensure services are running correctly to book hotels from different GDS vendors. \
        Built new microservices that can search and book hotel through vendors such as booking.com',
        'techStack': ['Kotlin', 'Docker', 'Kubernetes', 'AWS'],
        'duration': 'Sep 2019 – Apr 2020'
    },
    {
        'companyLogo': require('static/hootsuiteLogo.png'),
        'companyName': 'Hootsuite',
        'jobTitle': 'Software Developer Co-op - Full Stack',
        'jobDescription': 'Implemented image compression for uploaded image, which increased upload capacity by over 100%.\
        Created new UI component with React.js and maintained legacy code in AngularJS. Maintained code quality with clear documentation and improved Python unit tests coverage by 20%',
        'techStack': ['JavaScript', 'Docker', 'React.js', 'AngularJS', 'Python / Flask'],
        'duration': 'May 2020 – Dec 2020'
    }
]


const Experience = () => {

    return <ExperienceSection>
        <SectionTitle>Experience</SectionTitle>
        <JumbotronSection>
            <JumbotronContainer>
                {
                jobs.map((job) => <Jumbotron detail={job} ></Jumbotron>)
                }
            </JumbotronContainer>
        </JumbotronSection>
    </ExperienceSection>
}

export default Experience