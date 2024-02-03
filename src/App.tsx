import React from 'react';
import './styles/App.css';
import './styles/reset.css'

function App() {
  return (
    <div className='container'>
      <header>
        <h1 className='title_logo'>A. Blog</h1>
        <div className='search_post'>
          <input className='input_box' type='text' placeholder='Enter the post name...' />
          <button className='loupe_button'/>
        </div>
      </header>
      <section className='posts_section'>
        <div className='post'>
          <h1 className='title_post'>hello</h1>
          <h1 className='decsription_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus autem? Unde ex autem, aspernatur exercitationem accusantium eius, reiciendis, voluptatibus possimus esse minima eum veritatis culpa sint dolor ab recusand...</h1>
        </div>
        <div className='post'>
          <h1 className='title_post'>hello</h1>
          <h1 className='decsription_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus autem? Unde ex autem, aspernatur exercitationem accusantium eius, reiciendis, voluptatibus possimus esse minima eum veritatis culpa sint dolor ab recusand...</h1>
        </div>
        <div className='post'>
          <h1 className='title_post'>hello</h1>
          <h1 className='decsription_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus autem? Unde ex autem, aspernatur exercitationem accusantium eius, reiciendis, voluptatibus possimus esse minima eum veritatis culpa sint dolor ab recusand...</h1>
        </div>
        <div className='post'>
          <h1 className='title_post'>hello</h1>
          <h1 className='decsription_post'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus autem? Unde ex autem, aspernatur exercitationem accusantium eius, reiciendis, voluptatibus possimus esse minima eum veritatis culpa sint dolor ab recusand...</h1>
        </div>
      </section>
      <section className='pages_section'>
        <div className='pages'>
          <h1 className='page'>2</h1>
          <h1 className='page'>3</h1>
          <h1 className='page active'>4</h1>
          <h1 className='page'>5</h1>
          <h1 className='page'>6</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
