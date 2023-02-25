import { NextSeo } from 'next-seo'
import React from 'react'
import BlurImage from '../../components/BlurImage'

export default function AlbumPhotos(props) {
  const { album } = props
  return (
    <div className='max-w-[95vw] mx-auto'>
      <NextSeo
        title={`Album Photos`}
        description="Album Photos"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Album Photos',
          description: 'Album Photos',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'Felix Blog',
        }}
      />
      <h1 className="text-black font-bold text-3xl py-5">Album Photos</h1>
      <div className=" flex flex-shrink-0 gap-2 flex-wrap">
      {
          album?.map((post) => (
            <div key={post.id}>
              <BlurImage width={400} height={400} image={post.url}/>
            </div>
          )
          )}
      </div>
    </div>
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

