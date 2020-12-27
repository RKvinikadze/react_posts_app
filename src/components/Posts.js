import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  const filterPosts = (event) => {
    setInput(event.target.value)
    setFiltered(
      posts.filter(post =>
        post.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }
  return (
    <div>
      <div>
        <input type="text" value={input} onChange={filterPosts} />
      </div>
      <h2>posts</h2>
      {filtered.map(post => {
        return (
          <div key={post.id}>
            {post.title}
            <Link to={`/posts/${post.id}`}>
              <button>click here</button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
