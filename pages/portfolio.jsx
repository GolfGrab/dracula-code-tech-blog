import React from 'react'
import Head from 'next/head'
import CustomNav from '../components/CustomNav.component'

export default function Portfolio() {
  return (
    <div>
      <Head>
        <title>Dracula Code 🧛‍♂️ - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CustomNav />
        <div
          className="container mx-auto flex h-screen flex-col items-center justify-center bg-fuchsia-100"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1541422348463-9bc715520974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80")',
            backgroundColor: '#2f2f2f',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'multiply',
          }}
        >
          <div className="grid grid-cols-4 md:grid-cols-9">
            <div>aaa</div>
            <div>bbb</div>
            <div>ccc</div>
            <div>ddd</div>
            <div>eee</div>
            <div>fff</div>
            <div>ggg</div>
            <div>hhh</div>
            <div>iii</div>
          </div>
        </div>
      </div>
    </div>
  )
}
