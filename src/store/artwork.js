import axios from 'axios'

const GOT_ALL_ARTWORK = 'GOT_ALL_ARTWORK'


const gotAllArtwork = (artwork) => ({
  type: GOT_ALL_ARTWORK,
  artwork
})

export const getArtwork = () => async dispatch => {
  try {
    console.log('in store')
    const { data } = await axios.get('/api/artwork')
    dispatch(gotAllArtwork(data))
  } catch (error) {
    console.log(error)
  }
}

export const artwork = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_ARTWORK:
      return action.artwork

    default:
      return state
  }
}
