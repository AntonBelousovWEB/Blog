import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Tags from './Tags';
import { AuthContext } from '../../../context/authContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();

  console.log(user);

  return (
    <header>
      <Link className='title_logo' to={'/'}>A. Blog</Link>
      {user ? (
        <Tags />
      ) : null}
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
      {!user ? (
        <div className='auth_box'>
          <Link className='login_button' to={'/login'}>Log In</Link>
          <Link className='join_button' to={'/join'}>Join</Link>
        </div>
      ) : null}
    </header>
  );
};

export default Header;