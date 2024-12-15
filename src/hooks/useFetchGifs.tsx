import { useState, useCallback } from 'react';
import { searchGifs } from '../services/gifApi'; // Import the API function

const useFetchGifs = () => {
  const [gifs, setGifs] = useState<any[]>([]); // Store GIF data
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchGifs = useCallback(async (query: string) => {
    setLoading(true); // Set loading to true while fetching
    setError(null); // Clear any previous error
    try {
      const data = await searchGifs(query); // Call the API function
      setGifs(data); // Store the GIFs in state
    } catch (err) {
      setError('Failed to fetch GIFs'); // Set an error message if the fetch fails
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  }, []);

  return { gifs, loading, error, fetchGifs };
};

export default useFetchGifs;
