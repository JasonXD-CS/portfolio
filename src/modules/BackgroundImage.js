import React from 'react';
import styled from 'styled-components';

const picture = require('static/jwxd.jpeg')

const BackgroundImage = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${picture});
`

const ImageSection = () => {
    return <BackgroundImage>
    </BackgroundImage>
}

export default ImageSection