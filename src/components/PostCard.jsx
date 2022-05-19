import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <div className="post-card">
        <div className="header">
          <h2>{post.title}</h2>
          <p className="muted">{post.date}</p>
        </div>
        <img src={post.image.url} alt={post.image.alt} />
      </div>
    </Link>
  );
}
