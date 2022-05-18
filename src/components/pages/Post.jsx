import { createClient } from 'contentful';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostModel, { ContentType } from '../../models/PostModel';

export default function Post() {
  const { id } = useParams();

  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });

  const [post, setPost] = useState();

  useEffect(() => {
    const query = { content_type: 'blogPost', 'fields.slug': id };
    client.getEntries(query).then(function(untypedBlogPosts) {
      try {
        const data = untypedBlogPosts.items[0];
        setPost(new PostModel(data));
      } catch (error) {
        // Redirect to NotFound page
        console.error('Error:', error);
      }
    });
  }, []);

  if (!post) return <div className="post">Loading post ...</div>;
  return (
    <div className="post">
      <div className="post-header">
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <img src={post.image.url} alt={post.image.alt} />
        <ul className="tags">
          {post.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <ul className="content">
        {post.body.map(
          (entry, index) =>
            // Paragraph
            (entry.type === ContentType.PARAGRAPH && (
              <li key={index}>
                <p>
                  {entry.value.map((value) => {
                    switch (value.mark) {
                      case 'bold':
                        return <b>{value.text}</b>;
                        break;
                      case 'italic':
                        return <i>{value.text}</i>;
                        break;
                      default:
                        return <>{value.text}</>;
                        break;
                    }
                  })}
                </p>
              </li>
            )) ||
            // Quote
            (entry.type === ContentType.QUOTE && (
              <li key={index}>
                <blockquote>
                  {entry.value.map((value) => {
                    switch (value.mark) {
                      case 'bold':
                        return <b>{value.text}</b>;
                        break;
                      case 'italic':
                        return <i>{value.text}</i>;
                        break;
                      default:
                        return <>{value.text}</>;
                        break;
                    }
                  })}
                </blockquote>
              </li>
            )) ||
            // Horizontal Rule
            (entry.type === ContentType.HORIZONTAL_RULE && (
              <li key={index}>
                <hr />
              </li>
            )) ||
            // Image
            (entry.type === ContentType.IMAGE && (
              <li key={index}>
                <img src={entry.value.url} alt={entry.value.alt} />
                <p className="caption">{entry.value.alt}</p>
              </li>
            ))
        )}
      </ul>
    </div>
  );
}
