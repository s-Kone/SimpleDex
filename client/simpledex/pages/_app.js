import React from 'react'
import Layout from '../components/layouts/layout'
import Nolayout from '../components/layouts/nolayout'
import '../styles/global.css'

// reference used for layouts: https://nextjs.org/docs/basic-features/layouts
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}