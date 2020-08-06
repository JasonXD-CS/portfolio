import React from 'react'
import styled from 'styled-components'



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
    background-color: #e3ffe8;
    padding: 10px;
    border-radius: 10px;
`

const ProjectJumbo = (props) => {
    var detail = props.detail

    return <StyledJumbotron>
        <ProjectName>{detail.projectName}</ProjectName>
        {detail.description.map((item) => <Description>{item}</Description>)}
        {detail.techStack.map((item) => <TechStackItem>{item}</TechStackItem>)}
    </StyledJumbotron>
}

export default ProjectJumbo