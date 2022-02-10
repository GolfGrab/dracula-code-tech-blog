import React from 'react'

import { useRouter } from 'next/router'

import { getPosts, getPostDetails } from '../../services'
import CustomNav from '../../components/CustomNav.component'

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components'

const PostDetails = ({ post }) => {
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 ">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative  top-20 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  console.log(posts)
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
