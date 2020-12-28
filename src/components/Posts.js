import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(posts => {
      setPosts(posts.data)
      setFiltered(posts.data)
    })
  }, [])

  if (!posts) {
    return <div>...loading</div>
  }

  const filterPosts = event => {
    setInput(event.target.value)
    setFiltered(
      posts.filter(post =>
        post.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }
  return (
    <div className="container-fluid">
      <h3>search</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="find post by title"
          value={input}
          onChange={filterPosts}
        />
        {input?<button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            setFiltered(posts)
            setInput('')
          }}
          style={{border:'none'}}
        >
          all posts
        </button>:null}
      </div>

      <h3>posts</h3>
      {filtered.map(post => {
        return (
          <div
            key={post.id}
            style={{ marginBottom: '10px' }}
            border="primary"
            className="card"
          >
            <div className="card-body">
              <div
                className="card-text"
                style={{ marginBottom: '10px', fontSize: '20px' }}
              >
                {post.title}
              </div>
              <Link to={`/posts/${post.id}`}>
                <button className="btn btn-success">Detailed</button>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
