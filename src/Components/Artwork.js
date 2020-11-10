import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArtwork } from '../store/artwork'
export default function Artwork() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtwork())
  }, [])
  const artwork = useSelector(state => state.artwork)
  return <div>
    {artwork.length ? artwork.map(painting => {
      return <div>
        <img src={painting.url} alt={painting.name} />
      </div>
    }) : 'Something went wrong, try again'}
  </div>
}
