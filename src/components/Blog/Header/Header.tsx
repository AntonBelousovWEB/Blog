import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tags from './Tags';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <header>
      <Link className='title_logo' to={'/'}>A. Blog</Link>
      <Tags />
      <div className='search_post'>
        <input
          className='input_box'
          type='text'
          placeholder='Enter the post name...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button 
          className='loupe_button' 
          onClick={() => navigate(`/search/${searchQuery.toLowerCase()}`)} 
        />
      </div>
      <div className='auth_box'>
        <button className='login_button'>Log In</button>
        <button className='join_button'>Join</button>
      </div>
    </header>
  );
};

export default Header;