import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type{ PicsumImage } from "../types/picsum";

const LIMIT = 36;
const picsumThumbSrc = (id: string, size = 400) =>
  `https://picsum.photos/id/${id}/${size}/${size}`;

const ImageGallery = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?limit=${LIMIT}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch images");
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="py-16 text-center text-gray-500">Loading...</p>;
  }
  if (error) {
    return <p className="py-16 text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image) => (
        <Link
          className="aspect-square w-full overflow-hidden"
          key={image.id}
          to={`/image/${image.id}`}
        >
          <img
            className="h-full w-full object-cover"
            src={picsumThumbSrc(image.id)}
            alt={image.author}
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageGallery;
