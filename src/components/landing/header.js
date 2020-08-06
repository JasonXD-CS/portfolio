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
            <HeaderText >                
                <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Experience
                </Link>
            </HeaderText>
            <HeaderText>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Personal Projects
            </Link>
            </HeaderText>
            <HeaderText>Contact</HeaderText>
           </HeaderSection>
       </div>
    }
}



export default Header