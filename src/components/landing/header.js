import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderText = styled.div`
    margin: 5px 30px;
    font-size: 20px;
`;

const HeaderSection = styled.div`
position: relative;
display: flex;
left: 20%;
margin-top: 5px;
`


class Header extends React.Component {
    render() {
       return <div className="App-header">
           <HeaderSection>
            <HeaderText >              
                <Link
                activeClass="active"
                to="introduction"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Jason Wu</Link>
            </HeaderText>
            <HeaderText >Experience</HeaderText>
            <HeaderText>Personal Projects</HeaderText>
            <HeaderText>Contact</HeaderText>
           </HeaderSection>
       </div>
    }
}



export default Header