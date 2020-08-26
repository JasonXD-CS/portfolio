import React from 'react'
import styled from 'styled-components'

const GithubImage = styled.img`
    width: 50px;
    height: 50px;
    display: flex;
`

const GitHubContainer = styled.div`
    width: 60px;
    height: 60px;
    display: inline-block;
    margin: 10px;
`

export const GithubLink = (props) => {
    const { link } = props

    return (<GitHubContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <GithubImage src={require('static/githubLogo.png')}/>
        </a>
    </GitHubContainer>)
}

export const YoutubeLink = (props) => {
    const { link } = props

    return (<GitHubContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <GithubImage src={require('static/youtubeLogo.png')}/>
        </a>
    </GitHubContainer>)
}

export const LinkedInLink = (props) => {
    const { link } = props

    return (<GitHubContainer>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <GithubImage src={require('static/LinkedinIcon.png')}/>
        </a>
    </GitHubContainer>)
}

