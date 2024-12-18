import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { selectGif } from '../services/gifApi.ts';

interface GifDetails {
  id: string;
  title: string;
  url: string;
  preview_url: string;
}

const GifDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [gifDetails, setGifDetails] = useState<GifDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      selectGif(id)
        .then((data) => {
          setGifDetails(data);
        })
        .catch((err) => {
          setError('Failed to load GIF details.');
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
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
    </div>
  );
};

export default GifDetails;
