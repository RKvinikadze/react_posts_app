import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Comments = () => {
  const id = Number(useParams().id)
  const [comments, setComments] = useState(null)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(comment => setComments(comment.data))
  }, [])

  if (!comments) {
    return <p>...loading</p>
  }
  return (
    <ul>
      {comments.map(comment => {
        return <li key={comment.id}>{comment.body}</li>
      })}
    </ul>
  )
}

export default Comments
