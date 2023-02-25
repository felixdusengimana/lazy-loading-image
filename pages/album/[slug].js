import React from 'react'
import Link from 'next/link'
import BlurImage from '@components/BlurImage'
import Layout from '@components/layout'

export default function AlbumPhotos(props) {
  const { album } = props
  return (
    <Layout>
      <div className='flex items-center gap-4'>
      <Link href={"/"} className='w-6 h-6 bg-blue-600 font-bold text-white flex items-center justify-center px-10 py-5 rounded-sm' title='back'>&larr;</Link>
      <h1 className="text-black font-bold text-3xl py-5">Album Photos</h1>
      </div>
      <div className=" flex flex-shrink-0 gap-2 flex-wrap">
      {
          album?.map((post) => (
            <div key={post.id}>
              <BlurImage width={400} height={400} image={post.url}/>
            </div>
          )
          )}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.slug}`)
    const data = await res.json()
    return {
        props: {
            album: data,
        },
        revalidate: 86400
    }
}


export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    const paths = data.map((album) => ({
        params: { slug: album.id.toString() },
    }))
    return { paths, fallback: true }
}

