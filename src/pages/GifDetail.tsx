import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectGif } from '../services/gifApi.ts'; // Assuming selectGif is exported from an api file

interface GifDetails {
  id: string;
  title: string;
  url: string;
  preview_url: string;
}

const GifDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const [gifDetails, setGifDetails] = useState<GifDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true); // Start loading
      setError(null); // Reset error state
      selectGif(id)
        .then((data) => {
          setGifDetails(data);
        })
        .catch((err) => {
          setError('Failed to load GIF details.');
          console.error(err);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the request completes
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!gifDetails) {
    return <div>No GIF found.</div>;
  }

  return (
    <div className="gif-details">
      <h1>{gifDetails.title}</h1>
      <img src={gifDetails.preview_url} alt={gifDetails.title} className="gif-image" />
      <p>
        <strong>GIF ID:</strong> {gifDetails.id}
      </p>
    </div>
  );
};

export default GifDetails;
