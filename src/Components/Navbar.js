import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
  return <NavWrapper>
    {/* <nav> */}
    <NavContainer>
      <a href='/'>Natalia Gabuaeva</a>
      <a href='/'>Artwork</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      {/* </nav> */}
    </NavContainer>
    <Overlay></Overlay>
  </NavWrapper>

}

const NavWrapper = styled.div`
display: flex;
    float: left;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 999999;
    width: 200px;
    min-height: 700px;
    padding: 0 20px;
    left: 80px;
    align-items: center;
`
const NavContainer = styled.div`
height: 50%;
position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    overflow: visible;
`

const Overlay = styled.div`
background: rgba(253, 248, 237, 0.795);
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
z-index: 0;
opacity: 0.8;
`
