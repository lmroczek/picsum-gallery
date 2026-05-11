import { Routes, Route } from 'react-router-dom';
import ImageGallery from "./components/ImageGallery";
import ImageDetail from "./components/ImageDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="space-y-8 py-8">
      <header>
        <h1 className="font-serif text-3xl md:text-4xl font-normal text-center">Picsum Image Gallery</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ImageGallery />} />
          <Route path="/image/:id" element={<ImageDetail />} />
          <Route path="*" element={<NotFound />} />,
        </Routes>
      </main>
    </div>
  );
}

export default App;
