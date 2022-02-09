import React, { useRef, useEffect, useState } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef(null)
  const nameEl = useRef(null)
  const emailEl = useRef(null)
  const storeDataEl = useRef(null)

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
    storeDataEl.current.checked = window.localStorage.getItem('storeData')
  }, [])

  const handleCommentSubmission = (e) => {
    setError(false)
    e.preventDefault()

    const comment = commentEl.current.value
    const name = nameEl.current.value
    const email = emailEl.current.value
    const storeData = storeDataEl.current.checked

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      comment,
      name,
      email,
      slug,
    }
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('storeData', storeData)
    } else {
      window.localStorage.removeItem('name')
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('storeData')
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    })
  }

  return (
    <div className="mb-8 rounded-lg bg-gray-800 p-8 pb-12 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-white">
        Leave a comment
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="w-full rounded-lg bg-gray-500 p-4 text-gray-100 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Write your comment here..."
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4  lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="w-full rounded-lg bg-gray-500 px-4 py-2 text-gray-100 outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Your name"
          name="name"
        />
        <input
          type="email"
          ref={emailEl}
          className="w-full rounded-lg bg-gray-500 px-4 py-2 text-gray-100 outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Your email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value={true}
          />
          <label
            htmlFor="storeData"
            className="ml-2 cursor-pointer text-gray-500"
          >
            Save my name and email for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500"> All field are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="rounded-lg bg-blue-500 py-2 px-4 font-bold text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-2 text-xl font-semibold text-green-200 ">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
