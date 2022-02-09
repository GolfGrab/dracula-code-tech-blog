import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])
  return (
    <div className="mb-8 rounded-lg bg-gray-800 p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold text-white">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3 text-gray-200 hover:text-green-200 focus:text-green-200">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
