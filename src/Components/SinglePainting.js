import React from 'react'
import styled from 'styled-components'

export default function SinglePainting(props) {
  const painting = props.painting
  console.log('in single painting')
  return (
    <div>
      <SelectedPainting src={painting.url} alt={painting.name} />
    </div>
  )
}


const SelectedPainting = styled.img`
position: relative;
margin-right: 10vw;
margin-left: 5vw;
border: 1.5rem solid #fff;
outline: 1.7rem ridge #f5f9ffd6;
box-shadow: 1rem 1.5rem 2rem 1.5rem #0000009c;
height: 80vh;
`
