import React from 'react';
import { Post } from '../../types/Post';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {

  const convertDate = (dateString: string): string => {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;

      return `${formattedDay}.${formattedMonth}.${year}`;
  }

  return (
    <section className='posts_section'>
      {posts.map((post, index) => (
        <div key={index} className='post'>
          <div className='top_post'>
            <h1 className='title_post'>{post.title}</h1>
            <h1 className='date_post'>{"· " + convertDate(post.CreatedAt)}</h1>
          </div>
          <h1 className='description_post'>{post.content}</h1>
        </div>
      ))}
    </section>
  );
};

export default PostList;