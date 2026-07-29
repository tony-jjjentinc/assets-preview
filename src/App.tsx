
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentPreview from './pages/ComponentPreview';
import ImagePreview from './pages/ImagePreview';
import PatternPreview from './pages/PatternPreview';
import ColorPreview from './pages/ColorPreview';
import TypographyPreview from './pages/TypographyPreview';
import SetupInstructions from './pages/SetupInstructions';
import Templates from './pages/Templates';
import { FloatingToolbar } from './components/FloatingToolbar';

function App() {
  return (
    <HashRouter>
      <FloatingToolbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ComponentPreview />} />
          <Route path="colors" element={<ColorPreview />} />
          <Route path="images" element={<ImagePreview />} />
          <Route path="patterns" element={<PatternPreview />} />
          <Route path="typography" element={<TypographyPreview />} />
          <Route path="setup" element={<SetupInstructions />} />
          <Route path="templates" element={<Templates />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
