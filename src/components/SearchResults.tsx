import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchGifs from '../hooks/useFetchGifs';
import GifList from '../components/GifList';

interface SearchResultsProps {
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const { gifs, loading, error, fetchGifs } = useFetchGifs();
  const navigate = useNavigate();


  useEffect(() => {
    if (query) {
      fetchGifs(query); // Fetch GIFs when query changes
    }
  }, [query, fetchGifs]); // Re-run effect when query changes

  // Handle selecting a GIF and navigating to the GIF detail page
  const handleGifSelect = (gifId: string) => {
    // navigate to the gifDetails page
    navigate(`/gif/${gifId}`);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '16px',
        }}
      >
        Search Results for: "{query}"
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && gifs.length === 0 && <p>No GIFs found for "{query}"</p>}
      {!loading && !error && gifs.length > 0 && <GifList gifs={gifs} onGifSelect={ handleGifSelect } />}
    </div>
  );
};

export default SearchResults;
