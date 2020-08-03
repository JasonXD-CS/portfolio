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

const CompanyLogo = styled.img`
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-bottom: 20px
`

const CompanyName = styled.h2`
    display: inline-block;
    margin-left: 20px;
    line-height: 50px;
`

const JobTitle = styled.h5``

const JobDescription = styled.p``

const TechStackItem = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 20px;
    background-color: #e3ffe8;
    padding: 10px;
    border-radius: 10px;
`

const Duration = styled.p``

const Jumbotron = (props) => {
    var detail = props.detail

    return <StyledJumbotron>
        <CompanyLogo src={detail.companyLogo}></CompanyLogo>
        <CompanyName>{detail.companyName}</CompanyName>
        <JobTitle>{detail.jobTitle}</JobTitle>
        <JobDescription>{detail.jobDescription}</JobDescription>
        {detail.techStack.map((item) => <TechStackItem>{item}</TechStackItem>)}
        <Duration>{detail.duration}</Duration>
    </StyledJumbotron>
}

export default Jumbotron