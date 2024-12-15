import { useState, useCallback } from 'react';
import { searchGifs } from '../services/gifApi';

const useFetchGifs = () => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
