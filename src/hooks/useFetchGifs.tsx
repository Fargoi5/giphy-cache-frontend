import { useState, useCallback } from 'react';
import { searchGifs } from '../services/gifApi'; // Import the API function

const useFetchGifs = () => {
  const [gifs, setGifs] = useState<any[]>([]); // Store GIF data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchGifs = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGifs(query);
      setGifs(data);
    } catch (err) {
      setError('Failed to fetch GIFs');
    } finally {
      setLoading(false);
    }
  }, []);

  return { gifs, loading, error, fetchGifs };
};

export default useFetchGifs;
