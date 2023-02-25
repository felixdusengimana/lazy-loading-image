import Link from 'next/link'
import Layout from '@components/layout'

export default function Albums(props) {
  const { albums } = props
  return (
    <Layout>
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
    </Layout>
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