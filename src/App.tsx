
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ComponentPreview from './pages/ComponentPreview';
import ImagePreview from './pages/ImagePreview';
import PatternPreview from './pages/PatternPreview';
import ColorPreview from './pages/ColorPreview';
import StatusPreview from './pages/StatusPreview';
import TypographyPreview from './pages/TypographyPreview';
import SetupInstructions from './pages/SetupInstructions';
import IconPreview from './pages/IconPreview';
import Home from './pages/Home';
// import { FloatingToolbar } from './components/FloatingToolbar';

function App() {
  return (
    <HashRouter>
      {/* <FloatingToolbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="components" element={<ComponentPreview />} />
          <Route path="colors" element={<ColorPreview />} />
          <Route path="status" element={<StatusPreview />} />
          <Route path="images" element={<ImagePreview />} />
          <Route path="icons" element={<IconPreview />} />
          <Route path="patterns" element={<PatternPreview />} />
          <Route path="typography" element={<TypographyPreview />} />
          <Route path="setup" element={<SetupInstructions />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
