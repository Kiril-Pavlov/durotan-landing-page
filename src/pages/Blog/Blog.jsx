import React from "react";
import "./Blog.css";
import blogPost from "..//../assets/blog_post.jpg";
import OurJournal from "../../components/OurJournal";
import slika1 from "../../assets/article_1.jpg";
import slika2 from "../../assets/article_2.jpg";
import slika3 from "../../assets/article_3.jpg";
import slika4 from "../../assets/article_4.jpg";
import slika5 from "../../assets/article_5.jpg";
import slika6 from "../../assets/article_6.jpg";
const Blog = () => {
  const articleList = [
    {
      category: "INSPIRATION",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "How to choose a sneakers suit for any your style",
      img: slika1,
    },
    {
      category: "TIPS & TRICKS",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "How to mixed minimalist fashion style with basic items",
      img: slika2,
    },
    {
      category: "LOOKBOOK",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "How to choose a sneakers suit for any your style",
      img: slika3,
    },
    {
      category: "INSPIRATION",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "Ready for the winter! Discover the new collections of Durotan",
      img: slika4,
    },
    {
      category: "INSPIRATION",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "Simple Men #5: Top items essential for any gentleman",
      img: slika5,
    },
    {
      category: "INSPIRATION",
      date: "Dec 24, 2022",
      author: "By admin",
      title: "Irresistible Attraction",
      img: slika6,
    },
  ];
  return (
    <div className="blog-container">
      <h1> Our Journal</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humou
      </p>
      <img src={blogPost} className='blogPostImg'/>
      <OurJournal />
      <div className="blogSections">
        <ul className="blogSearch">
          <li>All</li>
          <li>Inspiration</li>
          <li>Lookbook</li>
          <li>Tips&Tricks</li>
          <li>News</li>
          <li>Others</li>
        </ul>
        <input
          type="text"
          placeholder="Search in blog"
          className="inputBlogSearch"
        ></input>
      </div>
      <div className="article-blogs">
        {articleList.map((item) => {
          return (
            <div className="article-blog">
              <img src={item.img} className='blogImg'></img>
              <div className="post-info">
                <div>{item.category}/</div>
                <div className="blog-date">{item.date}/</div>
                <div className="blog-date">{item.author}</div>
              </div>
              <div className="blog-title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
