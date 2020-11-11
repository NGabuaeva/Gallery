import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArtwork } from '../store/artwork'
import styled from 'styled-components'

export default function Artwork() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtwork())
  }, [])
  const artwork = useSelector(state => state.artwork)
  return <PaintingWrapper>
    {artwork.length ? artwork.map(painting => {
      return <Link to={`/artwork/${painting.id}`}>
        <Painting src={painting.url} alt={painting.name} />
      </Link>
    }) : 'Something went wrong, try again'}
  </PaintingWrapper>
}


const PaintingWrapper = styled.div`
display: flex;
flex-direction: row;
overflow-y: hidden;
overflow-x: scroll;
max-height: 100%
`

const Painting = styled.img`
padding: 20px
`
