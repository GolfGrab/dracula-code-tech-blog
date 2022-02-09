import Link from 'next/link'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function CustomNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex h-20 items-center bg-transparent bg-black bg-opacity-25 text-2xl font-semibold text-gray-400 shadow-lg">
        <div className="min-h-20   mx-auto w-full justify-between sm:px-2 md:px-1 lg:px-8">
          <div className="flex justify-between ">
            <div className="flex space-x-4">
              {/* Logo and brand name */}
              <Link href="#" passHref>
                <a className="flex items-center py-5 px-2 text-rose-700 hover:text-rose-600">
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
                  <a className="py-5 px-3 hover:text-gray-200 hover:underline focus:underline">
                    Home
                  </a>
                </Link>
                <Link href="#" passHref>
                  <a className="py-5 px-3 hover:text-gray-200 hover:underline focus:underline">
                    Featured
                  </a>
                </Link>
              </div>
            </div>
            {/* secondaryNav */}
            <div className="hidden items-center space-x-1 md:flex">
              <Link href="#" passHref>
                <a className="py-5 px-3 hover:text-gray-200 hover:underline focus:underline">
                  My Portfolio
                </a>
              </Link>
              <Link href="#" passHref>
                <a className="rounded  bg-rose-300 py-2 px-3 text-rose-900 hover:bg-rose-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2">
                  Contact Me
                </a>
              </Link>
            </div>
            {/* hamburger icon */}
            <div className="mr-4 flex items-center px-1 md:hidden">
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
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="fixed top-0 left-0 right-0 mt-20 block rounded-b-lg bg-black bg-opacity-25 pb-3 text-lg font-semibold text-gray-400 md:hidden "
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">Home</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">Featured</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block px-4 py-2">My Portfolio</a>
          </Link>
          <Link href="#" passHref>
            <a className="mx-3 block rounded-md bg-rose-300  px-4 py-2 text-rose-900">
              Contact Me
            </a>
          </Link>
        </div>
      </Transition>
    </>
  )
}
