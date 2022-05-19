import React, { useEffect, useState } from 'react';
import PostModel from '../../models/PostModel';
import PostCard from '../PostCard';
import { client } from '../../App';

export default function Home({ illustration }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPostsContent();
  }, []);

  function fetchPostsContent() {
    // Get all blog posts from contentful
    const query = { content_type: 'blogPost' };
    client.getEntries(query).then(function(untypedBlogPosts) {
      try {
        setPosts(untypedBlogPosts.items.map((data) => new PostModel(data)));
      } catch (error) {
        // Redirect to NotFound page
        console.error('Error:', error);
      }
    });
  }

  return (
    <div>
      <div className="home-hero">
          <h1>Hi, I'm Ian Kirkland.</h1>
        <img src={illustration.url} alt={illustration.alt} />
      </div>
      <ul className="post-card-grid">
        {posts.map((post, index) => (
          <li key={index}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
