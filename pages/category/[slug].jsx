import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader } from '../../components'
import CustomNav from '../../components/CustomNav.component'

const CategoryPost = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div
      style={{
        paddingTop: '6rem',
        marginBottom: '-2rem',
        backgroundColor: '#2f2f2f',
        backgroundImage: 'url(/keyboard-bg.jpg)',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <CustomNav />
      <div className="container mx-auto mb-8 px-10 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-20 lg:sticky">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryPost

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
    revalidate: 600,
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
