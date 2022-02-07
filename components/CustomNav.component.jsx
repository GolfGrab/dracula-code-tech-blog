import Link from 'next/link'
import React, { useState } from 'react'

export default function CustomNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex h-20 items-center bg-transparent bg-black bg-opacity-25 text-2xl font-semibold text-gray-400 shadow-lg">
        <div className="min-h-20 container mx-auto  sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              {/* Logo and brand name */}
              <Link href="#" passHref>
                <a className="flex items-center py-5 px-2 text-rose-700 hover:text-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>Dracula Code</span>
                </a>
              </Link>
              {/* primaryNav */}
              <div className="hidden items-center space-x-1 md:flex">
                <Link href="#" passHref>
                  <a className="py-5 px-3 hover:text-gray-200 hover:underline">
                    Dashboard
                  </a>
                </Link>
                <Link href="#" passHref>
                  <a className="py-5  px-3 hover:text-gray-200 hover:underline">
                    News
                  </a>
                </Link>
              </div>
            </div>
            {/* secondaryNav */}
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="#" passHref>
                <a className="py-5 px-3 hover:text-gray-200 hover:underline">
                  My Portfolio
                </a>
              </Link>
              <Link href="#" passHref>
                <a className="rounded  bg-pink-300 py-2 px-3 text-rose-900 hover:bg-pink-400 hover:text-black">
                  Contact Me
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
        </div>
      </nav>
      {/* mobile menu */}
      {!isOpen ? (
        <></>
      ) : (
        <div
          className="fixed top-0 left-0 right-0 mt-20 block rounded-b-lg bg-black bg-opacity-25 pb-3 text-lg font-semibold text-gray-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">Dashboard</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">News</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">My Portfolio</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block rounded-2xl bg-pink-300  px-4 py-2 text-pink-900">
              Contact Me
            </a>
          </Link>
        </div>
      )}
    </>
  )
}
