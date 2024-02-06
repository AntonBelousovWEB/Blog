import React from 'react';

const Header = () => {
  return (
    <header>
      <h1 className='title_logo'>A. Blog</h1>
      <div className='search_post'>
        <input className='input_box' type='text' placeholder='Enter the post name...' />
        <button className='loupe_button'/>
      </div>
    </header>
  );
};

export default Header;
