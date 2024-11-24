import React from 'react'
import Navbar from '../../common/Navbar'
import BlogFeed from './BlogFeed'
import Footer from '../../common/Footer'

const BlogPage = () => {
  return (
    <>
    <div>
      <Navbar/>
      <BlogFeed/>
      <Footer/>
    </div>
    </>
  )
}

export default BlogPage