import ImageGallery from "../components/ImageGallery.tsx";

function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold text-center">Picsum Image Gallery</h1>
      </header>
      <main>
        <ImageGallery />
      </main>
    </div>
  );
}

export default App;
