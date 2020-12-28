import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../services/post'

const PostById = () => {
  const id = Number(useParams().id)
  const [post, setPost] = useState(null)

  useEffect(() => {
    getById(id).then(post => setPost(post))
  }, [])

  if (!post) {
    return <p>...loading</p>
  }
  return (
    <div className="card text-center" style={{margin: '10px 0'}}>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text" style={{fontSize: "20px"}}>{post.body}</p>
      </div>
    </div>
  )
}

export default PostById
