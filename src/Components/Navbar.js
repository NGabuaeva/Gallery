import React from 'react'
import styled from 'styled-components'
import Logo from '../myLogo.jpg'

export default function Navbar() {
  return <NavWrapper id='nav'>
    {/* <nav> */}
    <NavContainer>
      <a href='/'>
        <LogoImage src={Logo} alt='logo' />
      </a>
      <Navlink href='/'>Artwork</Navlink>
      <Navlink href='/about'>About</Navlink>
      <Navlink href='/contact'>Contact</Navlink>
      {/* </nav> */}
    </NavContainer>
    <Overlay></Overlay>
  </NavWrapper>

}

const NavWrapper = styled.div`
display: flex;
height: 100%;
position: fixed;
z-index: 999999;
width: 19vw;
left: 80px;
align-items: center;
`
const NavContainer = styled.div`
height: 50%;
position: relative;
top: -130px;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
padding: 0 10%;
align-items: center;
`

const Overlay = styled.div`
background: rgba(253, 248, 237, 0.795);
position: absolute;
height: 100%;
width: 100%;
opacity: 0.8;
`

const Navlink = styled.a`
color: #0d0909;
font-size: 16px;
line-height: 1.7;
text-decoration: none;
background-color: rgba(253, 248, 237, 0.795);
width: 60%;
border-radius: 3px;
opacity: .93;
&:hover {
  transform: scale(1.05) ;
  z-index: 20;
  color: #c5479e
}
`

const LogoImage = styled.img`
width: 80%;

`
