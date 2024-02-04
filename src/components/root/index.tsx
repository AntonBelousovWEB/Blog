import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import A from '../../a';

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/page/1" replace />}
        />
        <Route path="/page/:page" element={<A />} />
      </Routes>
    </Router>
  );
}
