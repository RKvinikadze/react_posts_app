import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts'
import PostById from './components/PostById'
import Comments from './components/Comments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='container-fluid' style={{marginTop:'60px'}}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/posts/:id">
            <PostById />
            <h3>comments</h3>
            <Comments />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
