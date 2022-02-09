import React, { useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'
import { comment } from 'postcss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res)
    })
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-gray-800 p-8 pb-12 text-white shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-gray-200">
            {comments.length} Comments
          </h3>
          {comments.map((objComment) => (
            <div
              key={objComment.createdAt}
              className="mb-4 border-b border-gray-100 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{objComment.name}</span> on{' '}
                {moment(objComment.createdAt).format('MMM DD YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-300">
                {parse(objComment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
