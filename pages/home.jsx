import React from 'react'
import Head from 'next/head'
import CustomNav from '../components/CustomNav.component'
import { PostCard, Categories, PostWidget } from './../components'
import { getPosts } from '../services'
import FeaturedPosts from '../sections/FeaturedPosts.section'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dracula Code 🧛‍♂️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          paddingTop: '6rem',
          marginBottom: '-2rem',
          backgroundColor: '#2f2f2f',
          backgroundImage:
            'url("https://images.unsplash.com/photo-1592991538534-00972b6f59ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
        }}
      >
        <CustomNav />
        <div>
          <div className="container mx-auto mb-8 px-10 pt-2 pb-20">
            <FeaturedPosts />
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="col-span-1 lg:col-span-8">
                {posts.map((post) => (
                  <PostCard post={post.node} key={post.node.title} />
                ))}
              </div>
              <div className="col-span-1 lg:col-span-4">
                <div className="relative top-20 lg:sticky">
                  <PostWidget />
                  <Categories />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
