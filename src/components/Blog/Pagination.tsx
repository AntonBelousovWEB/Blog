import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ totalPages, currentPage }) => {
  return (
    <section className='pages_section'>
      <div className='pages'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <Link
            key={pageNumber}
            to={`/page/${pageNumber}`}
            className={pageNumber === currentPage ? 'page active' : 'page'}
          >
            {pageNumber}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Pagination;
