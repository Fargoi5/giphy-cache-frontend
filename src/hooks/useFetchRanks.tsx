import { useState, useCallback } from 'react';
import { getRanks } from '../services/gifApi';

const useFetchRanks = () => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
