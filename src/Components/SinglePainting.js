import React from 'react'
import { useParams } from "react-router"
import { useSelector } from 'react-redux'

export default function SinglePainting() {
  const { id } = useParams()
  const artwork = useSelector(state => state.artwork)
  console.log('state:', artwork)
  const painting = artwork[id - 1]
  return (
    <div>
      {/* <img src={painting.url} alt={painting.name} /> */}
    </div>
  )
}
