import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="space-y-8 py-8">
      <header>
        <h1 className="font-serif text-3xl md:text-4xl font-normal text-center">Picsum Image Gallery</h1>
      </header>
      <main>
        <ImageGallery />
      </main>
    </div>
  );
}

export default App;
