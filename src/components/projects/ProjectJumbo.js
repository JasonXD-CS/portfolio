import React from 'react'
import styled from 'styled-components'
import githubLogo from 'static/githubLogo.png'

const StyledJumbotron = styled.div`
    max-width: 60vw;
    background-color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 5px grey;
`

const ProjectName = styled.h2`
    line-height: 50px;
`

const Description = styled.p`
    line-height: 10px;
`

const TechStackItem = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 20px;
    background-color: #ffc9d3;
    padding: 10px;
    border-radius: 10px;
`
const GithubImage = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
`

const GitHubContainer = styled.div`
    width: 60px;
    height: 60px;
    display: inline-block;
    margin: 10px;
`

const GithubLink = (props) => {
    const { link } = props

    return (<GitHubContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <GithubImage src={require('static/githubLogo.png')}/>
        </a>
    </GitHubContainer>)
}

const YoutubeLink = (props) => {
    const { link } = props

    return (<GitHubContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <GithubImage src={require('static/youtubeLogo.png')}/>
        </a>
    </GitHubContainer>)
}

const ProjectJumbo = (props) => {
    var detail = props.detail

    return <StyledJumbotron>
        <ProjectName>{detail.projectName}</ProjectName>
        {detail.description.map((item) => <Description>{item}</Description>)}
        {detail.techStack.map((item) => <TechStackItem>{item}</TechStackItem>)}
        <div>
            {detail.github?  <GithubLink link={detail.github}></GithubLink>: null}
            {detail.youtube? <YoutubeLink link={detail.youtube}/> : null}
        </div>
    </StyledJumbotron>
}

export default ProjectJumbo