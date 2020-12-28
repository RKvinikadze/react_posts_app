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
  }, [id])

  if (!comments) {
    return <p>...loading</p>
  }
  return comments.map(comment => {
    return (
      <div
        className="card text-white bg-secondary border-danger"
        style={{ margin: '20px 0' }}
        key={comment.id}
      >
        <div className="card-header">
          #{comment.id} - {comment.name}
        </div>
        <div className="card-body">
          <p className="card-text">{comment.body}</p>
        </div>
        <div className="card-footer">by {comment.email}</div>
      </div>
    )
  })
}

export default Comments
