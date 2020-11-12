import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArtwork } from '../store/artwork'
import styled from 'styled-components'
import { useHorizontalScroll } from "./hooks";

const heights = [{ height: '70%', alignSelf: 'center' }, { height: '40%', alignSelf: 'start', top: '10vh' }, { height: '60%', alignSelf: 'center' }, { height: '50%', alignSelf: 'center', marginBottom: '20vh' }, { height: '50%', alignSelf: 'flex-end', bottom: '10vh' }, { height: '40%', alignSelf: 'start', top: '20vh' }, { height: '70%', alignSelf: 'center' }, { height: '60%', alignSelf: 'center' }]

export default function Artwork() {
  const scrollRef = useHorizontalScroll()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtwork())
  }, [])
  let count = 0
  const artwork = useSelector(state => state.artwork)
  return <PaintingWrapper ref={scrollRef}>
    {artwork.length ? artwork.map(painting => {
      const style = heights[count]
      count = count === heights.length - 1 ? 0 : count + 1
      return <Painting src={painting.url} alt={painting.name} style={style} />
    }) : ''}
    <div width='20vw'></div>
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
