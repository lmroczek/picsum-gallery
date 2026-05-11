import { useEffect, useState } from "react";

interface PicsumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

const ImageGallery = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch images");
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.download_url} alt={image.author} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
