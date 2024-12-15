import { useState, useCallback } from 'react';
import { getRanks } from '../services/gifApi'; // Import the API function

const useFetchRanks = () => {
  const [gifs, setGifs] = useState<any[]>([]); // Store GIF data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchRanks = useCallback(async () => {
    setLoading(true); // Set loading to true while fetching
    setError(null); // Clear any previous error
    try {
      const data = await getRanks(); // Call the API function
      setGifs(data); // Store the GIFs in state
    } catch (err) {
      setError('Failed to fetch GIFs'); // Set an error message if the fetch fails
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  }, []);

  return { gifs, loading, error, fetchRanks };
};

export default useFetchRanks;
