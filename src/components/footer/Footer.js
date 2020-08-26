import React from 'react'
import styled from 'styled-components'
import { GithubLink, YoutubeLink, LinkedInLink } from '../projects/LinkComponent'

const FooterWrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;
`

const LinkSection = styled.div`
    position: relative;
    left: 40vw;
`

const Footer = () => {
    return (<FooterWrapper>
        <LinkSection>
            <GithubLink link="https://github.com/JasonXD-CS" />
            <YoutubeLink link="https://www.youtube.com/channel/UCHrBs4ynsodtJxp8oQo7y7g"/>
            <LinkedInLink link="https://www.linkedin.com/in/jason-w1994/"/>
        </LinkSection>
    </FooterWrapper>)
}

export default Footer