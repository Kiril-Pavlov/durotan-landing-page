import React from 'react'
import './Blog.css';
import blogPost from '..//../assets/blog_post.jpg';
import OurJournal from '../../components/OurJournal'
const Blog = () => {
  return (
    <div>
     <h1> Our Journal</h1>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou
      </p>
      <img src={blogPost} />
      <OurJournal/>
    </div>
  )
}

export default Blog