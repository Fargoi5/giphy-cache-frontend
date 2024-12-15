import { useState, useCallback } from 'react';
import { getRanks } from '../services/gifApi'; // Import the API function

const useFetchRanks = () => {
  const [gifs, setGifs] = useState<any[]>([]); // Store GIF data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchRanks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRanks();
      setGifs(data);
    } catch (err) {
      setError('Failed to fetch GIFs');
    } finally {
      setLoading(false);
    }
  }, []);

  return { gifs, loading, error, fetchRanks };
};

export default useFetchRanks;
