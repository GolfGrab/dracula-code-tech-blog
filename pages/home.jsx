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
          backgroundImage:
            'url("https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <CustomNav />
        <div className="flex h-screen items-center justify-center">
          <div className="container mx-auto flex flex-col items-center text-gray-400">
            Test
          </div>
        </div>
      </div>
    </div>
  )
}
