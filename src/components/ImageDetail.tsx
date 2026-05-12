import { Link, useParams } from "react-router-dom";
import type { PicsumImage } from "../types/picsum";
import { useEffect, useState } from "react";

const ImageDetail = () => {
  const [image, setImage] = useState<PicsumImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch image");
        return response.json();
      })
      .then((data) => setImage(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="py-16 text-center text-gray-500">Loading...</p>;
  }
  if (error) {
    return <p className="py-16 text-center text-red-500">Error: {error}</p>;
  }

  if (!image) {
    return <p className="py-16 text-center text-red-500">Image not found</p>;
  }

  return (
    <div>
      <Link className="text-blue-600 hover:underline pl-4" to="/">
        ← Back to Gallery
      </Link>
      <h1 className="mb-4 text-center">Photo by {image.author}</h1>
      <img
        className="mx-auto block max-h-[min(80vh,800px)] w-full max-w-5xl object-contain rounded-lg"
        src={image.download_url}
        alt={image.author}
      />
    </div>
  );
};

export default ImageDetail;
