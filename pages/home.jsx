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
          backgroundImage: 'url(/keyboard-bg.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
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
    revalidate: 300,
  }
}
