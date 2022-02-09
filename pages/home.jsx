import React from 'react'
import Head from 'next/head'
import CustomNav from '../components/CustomNav.component'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dracula Code 🧛‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=" h-screen "
        style={{
          backgroundColor: '#2f2f2f',
          // backgroundImage:
          //   'url("https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <CustomNav />
        <div className="flex h-screen items-center justify-center">
          <div class="container mx-auto flex flex-col items-center">
            <div class="mb-12 flex w-11/12 flex-col items-center justify-center text-center text-white">
              <h1 className="-mb-2 text-xl text-gray-400">Hello, I'm</h1>
              <h1 className="text-6xl text-gray-300">Surapus</h1>
              <h1 className="mt-2 mb-10 text-xl text-gray-400">
                A Newbie Developer
              </h1>
              <h1 className=" text-4xl text-rose-200">Welcome to my</h1>
              <h1 className=" text-6xl text-rose-500">Dracula Code</h1>
              <h1 className=" mt-2 text-3xl text-gray-300">Tech Blog</h1>
            </div>
            <div class="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-8 md:space-y-0">
              <button class="h-[4rem] w-[18rem] rounded border border-rose-800 bg-rose-800 px-10 py-4 text-2xl font-semibold  text-white transition duration-150 ease-in-out hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2">
                Continue To Blog
              </button>
              <button class="h-[4rem] w-[18rem] rounded border border-rose-800 bg-transparent  text-2xl font-semibold text-rose-800 transition duration-150 ease-in-out  hover:border-rose-600 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-offset-2 sm:px-10 ">
                See My Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
