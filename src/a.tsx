import React, { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import './styles/reset.css';

interface Post {
  title: string;
  content: string;
}

function A() {
  const { page } = useParams<{ page?: string }>();
  const currentPage = parseInt(page || '1', 10);

  const postsPerPage = 4;
  const [posts, setPosts] = useState<Post[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  const memoizedPosts = useMemo(() => {
    return posts.slice(0, postsPerPage * pageNumber);
  }, [posts, pageNumber]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/post?page=${currentPage}&perPage=4`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <div className='container'>
      <h1>Page {currentPage}</h1>
      <header>
        {/* Ваш заголовок и поиск */}
      </header>
      <section className='posts_section'>
        {memoizedPosts.map((post, index) => (
          <div key={index} className='post'>
            <h1 className='title_post'>{post.title}</h1>
            <h1 className='description_post'>{post.content}</h1>
          </div>
        ))}
      </section>
      <section className='pages_section'>
        <div className='pages'>
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map((_, index) => (
            <Link key={index} to={`/page/${index + 1}`} className={index + 1 === currentPage ? 'page active' : 'page'} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default A;