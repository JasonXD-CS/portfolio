import React from "react"
import styled from 'styled-components';

const TitleSection = styled.div`
    display: flex;
    color: white;
    font-size: 20px;
`

const Title = (props) => {
    return <TitleSection>
        Hi! I'm Jason Wu
    </TitleSection>
}

export default Title