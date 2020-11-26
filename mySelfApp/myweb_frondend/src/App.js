import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

const Home = () => (
  <div> <h2>TKTL notes app</h2> </div>
)

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id
  const anecdote = anecdotes.find(n => n.id === Number(id)) 
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>{anecdote.user}</div>
      <div><strong>{anecdote.important ? 'important' : ''}</strong></div>
    </div>
  )
}

const Anecdotes = ({anecdotes}) => (
  <div> <h2>Anecdotes</h2> 
   <ul>
      {anecdotes.map(anecdote =>
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      )}
    </ul>
  
  </div>
)
const Market = () => (
  <div> <h2>Market List</h2> </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)

const App = () => {
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/anecdotes">anecdotes</Link>
        <Link style={padding} to="/market">market</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Switch>
        <Route path="/anecdotes">
          <Anecdotes anecdotes={anecdotes} />
        </Route>
        <Route path="/anecdotes/:id">
          <Anecdote anecdotes={anecdotes} />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <div>
        <i>Note app, Department of Computer Science 2020</i>
      </div>
    </Router>
  )
}
export default App