import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostById = () => {
  const id = Number(useParams().id)
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(post => setPost(post.data))
  }, [])

  if (!post) {
    return <p>...loading</p>
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostById
