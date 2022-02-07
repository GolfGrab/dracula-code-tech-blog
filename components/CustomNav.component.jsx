import Link from 'next/link'
import React, { useState } from 'react'

export default function CustomNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center bg-gray-100 font-semibold">
      <div className="min-h-20 container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between ">
          <div className="flex space-x-4">
            {/* Logo and brand name */}
            <Link href="#" passHref>
              <a className="flex items-center py-5 px-2 text-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-1 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span>Dracula Code</span>
              </a>
            </Link>
            {/* primaryNav */}
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="#" passHref>
                <a className="py-5 px-3">Dashboard</a>
              </Link>
              <Link href="#" passHref>
                <a className="py-5  px-3">News</a>
              </Link>
            </div>
          </div>
          {/* secondaryNav */}
          <div className="hidden items-center space-x-1 md:flex">
            <Link href="#" passHref>
              <a className="py-5 px-3">Login</a>
            </Link>
            <Link href="#" passHref>
              <a className="rounded  bg-pink-300 py-2 px-3 text-pink-900">
                Signup
              </a>
            </Link>
          </div>
          {/* hamburger icon */}
          <div className="flex items-center px-1 md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        <div className="block md:hidden">
          <Link href="#" passHref>
            <a className="block px-4 py-4">Dashboard</a>
          </Link>
          <Link href="#" passHref>
            <a className="block px-4 py-4">News</a>
          </Link>
          <Link href="#" passHref>
            <a className="block px-4 py-4">Login</a>
          </Link>
          <Link href="#" passHref>
            <a className="mb-4 block rounded bg-pink-300  px-4 py-4 text-pink-900">
              Signup
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
