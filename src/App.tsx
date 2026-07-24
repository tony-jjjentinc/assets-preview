
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentPreview from './pages/ComponentPreview';
import ImagePreview from './pages/ImagePreview';
import PatternPreview from './pages/PatternPreview';
import TypographyPreview from './pages/TypographyPreview';
import { FloatingToolbar } from './components/FloatingToolbar';

function App() {
  return (
    <BrowserRouter basename="/assets-preview/">
      <FloatingToolbar />
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
