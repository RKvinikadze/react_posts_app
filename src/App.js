import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Posts from './components/Posts'
import PostById from './components/PostById'
import Comments from './components/Comments'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts/:id">
          <PostById />
          <h2>comments</h2>
          <Comments />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
