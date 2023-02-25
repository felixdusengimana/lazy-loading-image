import { NextSeo } from "next-seo"
import Link from 'next/link'

export default function Albums(props) {
  const { albums } = props
  return (
    <>
    <NextSeo
      title="Albums"
      description="Albums"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Albums',
        description: 'Albums',
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
      <h1 className="text-black font-bold text-3xl">Albums</h1>
      <div className="flex flex-shrink-0 gap-2 flex-wrap">
      {
        albums.map((post) => (
          <Link href={`/album/${post.id}`} key={post.id} className="bg-blue-600 text-white/80 p-2 rounded-sm cursor-pointer">
            <h2>{post.title}</h2>
          </Link>
        ))
      }
      </div>
    </>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const data = await res.json()
  return {
    props: {
      albums: data,
    },
  }
}