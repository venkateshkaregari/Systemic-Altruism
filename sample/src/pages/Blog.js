import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Blog Post 1',
      summary: 'Summary of Blog Post 1',
      date: '2025-02-01',
      content: 'Full content of Blog Post 1'
    },
    {
      title: 'Blog Post 2',
      summary: 'Summary of Blog Post 2',
      date: '2025-01-15',
      content: 'Full content of Blog Post 2'
    },
  ];

  return (
    <section className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-item">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <p>{post.date}</p>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
