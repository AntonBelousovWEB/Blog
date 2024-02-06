import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Blog from '../Blog';
import Post from '../Post';

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/page/1" replace />}
        />
        <Route path="/page/:page" element={<Blog />} />
        <Route path='/post/:post' element={<Post />} />
      </Routes>
    </Router>
  );
}
