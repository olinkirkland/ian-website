import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostModel from '../../models/PostModel';

export default function Post() {
  const { id } = useParams();

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  const [data, setData] = useState();

  useEffect(() => {
    const query = { content_type: 'blogPost', 'fields.slug': id };
    client.getEntries(query).then(function(untypedBlogPosts) {
      try {
        const blogPost = untypedBlogPosts.items[0];
        setData(new PostModel(blogPost));
      } catch (error) {
        // Redirect to NotFound page
        console.error('Error:', error);
      }
    });
  }, []);

  return (
    <div>
      <p>Post {id}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
