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
        'jobTitle': 'Freelancing Software Engineer - Full Stack',
        'jobDescription': 'Contractor job to build a seat reservation mobile app for client. Teamed up with another developer to \
        build an hybrid application. Architected the application and designed database schema according to the business needs.\
        App features includes make/extend/cancel reservation, payment processing with Stripe, phone verification with Twilio.\
        Backend server will be deployed with AWS. Project will also includes admin webpage to view existing reservation',
        'techStack': ['Node.js', 'Express', 'MongoDB', 'React / React Native', 'Twilio', 'Stripe', 'AWS'],
        'duration': 'Sep 2020 - Current'
    },
    {   
        'companyLogo': require('static/SAPconcurLogo.png'),
        'companyName': 'SAP Concur',
        'jobTitle': 'Software Engineer Intern - Backend',
        'jobDescription': 'Worked on next generation travel and expense software built in microservice architecture.\
        Automated sanity tests to ensure services are running correctly to book hotels from different GDS vendors. \
        Built new microservices that can search and book hotel through vendors such as booking.com and expanded further to work with CWT and TripSource',
        'techStack': ['Kotlin', 'Docker', 'Kubernetes', 'AWS'],
        'duration': 'May 2020 – Dec 2020'
    },
    {
        'companyLogo': require('static/hootsuiteLogo.png'),
        'companyName': 'Hootsuite',
        'jobTitle': 'Software Developer Co-op - Full Stack',
        'jobDescription': 'Implemented image compression for uploaded image, which increased upload capacity by over 100%.\
        Created new UI component with React.js and maintained legacy code in AngularJS.',
        'techStack': ['JavaScript', 'Docker', 'React.js', 'AngularJS', 'Python / Flask'],
        'duration': 'Sep 2019 – Apr 2020'
    }
]


const Experience = () => {

    return <ExperienceSection id='experience'>
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