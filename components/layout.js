import React from 'react'
import { NextSeo } from 'next-seo'

export default function Layout({children}) {
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
      {children}
      </div>
  )
}
