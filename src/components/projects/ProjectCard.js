import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: inline-block;
    background-color: white;
    min-width: 300px;
    max-width: 20vw;
    height: 400px;
    margin: 0px 30px;
`

const ProjectImage = styled.img``

const ProjectDescription = styled.p``


const ProjectCard = (props) => {
    const project = props.project

    return <Card>
        <ProjectImage src={project.image}></ProjectImage>
<ProjectDescription>{project.description}</ProjectDescription>
    </Card>
}


export default ProjectCard