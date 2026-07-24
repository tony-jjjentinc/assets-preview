import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentPreview from './pages/ComponentPreview';
import ImagePreview from './pages/ImagePreview';
import PatternPreview from './pages/PatternPreview';
import TypographyPreview from './pages/TypographyPreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ComponentPreview />} />
          <Route path="images" element={<ImagePreview />} />
          <Route path="patterns" element={<PatternPreview />} />
          <Route path="typography" element={<TypographyPreview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
