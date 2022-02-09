import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-gray-800 p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-white">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div
          key={post.title}
          className="flex w-full items-center pb-3 hover:cursor-pointer"
        >
          <Link href={`/post/${post.slug}`} key={post.title}>
            <div className="flex">
              <div className="w-16 flex-none">
                <img
                  alt={post.title}
                  height="60px"
                  width="60px"
                  className="rounded-full align-middle"
                  src={post.featuredImage.url}
                />
              </div>
              <div className=" ml-4 flex-grow">
                <p className="text-xs text-gray-400">
                  {moment(post.createAt).format('MMM DD YYYY')}
                </p>
                <div className="text-gray-200">{post.title}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
