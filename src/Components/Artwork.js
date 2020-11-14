import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArtwork } from '../store/artwork'
import styled from 'styled-components'
import { useHorizontalScroll } from "./hooks";

const styles = [{ height: '70%', alignSelf: 'center' }, { height: '40%', alignSelf: 'start', top: '10vh' }, { height: '60%', alignSelf: 'center' }, { height: '50%', alignSelf: 'center', marginBottom: '20vh' }, { height: '50%', alignSelf: 'flex-end', bottom: '10vh' }, { height: '40%', alignSelf: 'start', top: '20vh' }, { height: '70%', alignSelf: 'center' }, { height: '60%', alignSelf: 'center' }]

export default function Artwork() {
  const scrollRef = useHorizontalScroll()
  const dispatch = useDispatch()
  let count = 0
  const artwork = useSelector(state => state.artwork)

  useEffect(() => {
    dispatch(getArtwork())
  }, [])


  return <PaintingWrapper ref={scrollRef}>
    {artwork.length ? artwork.map(painting => {
      const style = styles[count]
      count = count === styles.length - 1 ? 0 : count + 1
      return <Painting src={painting.url} alt={painting.name} style={style} />
    }) : ''}
    {/* <StartButton href='#nav'>&#10688;</StartButton>
    <EndButton href='#end'>&#10689;</EndButton> */}
    <End id='end'>Natasha Gabuaeva</End>
  </PaintingWrapper>
}


const PaintingWrapper = styled.div`
display: flex;
flex-direction: row;
overflow-y: hidden;
overflow-x: auto;
height: 80vh;
padding: 10vh 10vw 10vh 30vw;
> * {
  &:last-child {
  margin-right: 20;
  background-color: black;
}
}
`

const Painting = styled.img`
position: relative;
margin-right: 10vw;
margin-left: 5vw;
border: 1.5rem solid #fff;
outline: 1.7rem ridge #f5f9ffd6;
box-shadow: 1rem 1.5rem 2rem 1.5rem #0000009c;

&:hover {
  transform: scale(1.05) ;
  z-index: 20;
}
`
const End = styled.div`
background: rgba(253, 248, 237, 0.795);
color: rgba(253, 248, 237, 0.795);
width: 20vw;
visibility: hidden;
`
const EndButton = styled.a`
position: fixed;
right: 3vw;
bottom: 3vh;
text-decoration: none;
font-size: 4rem;
color: #0d0909;

&:active {
  color: #0d0909;
}
`

const StartButton = styled.a`
position: fixed;
left: 27vw;
bottom: 3vh;
text-decoration: none;
font-size: 4rem;
color: #0d0909;

&:active {
  color: #0d0909;
}
`
