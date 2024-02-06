import React from 'react';
import { Post } from '../../types/Post';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <section className='posts_section'>
      {posts.map((post, index) => (
        <div key={index} className='post'>
          <h1 className='title_post'>{post.title}</h1>
          <h1 className='description_post'>{post.content}</h1>
        </div>
      ))}
    </section>
  );
};

export default PostList;
