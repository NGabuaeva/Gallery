import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Artwork from './Artwork'
import SinglePainting from './SinglePainting'

function Main() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/artwork' component={Artwork} />
      {/* <Route path='/artwork/:id' component={SinglePainting} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} /> */}
    </Switch>
    </Router>
  )
}

export default Main
