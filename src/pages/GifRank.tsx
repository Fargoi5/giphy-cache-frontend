import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchRanks from '../hooks/useFetchRanks';
import GifRankings from "../components/GifRankings.tsx";

interface SearchResultsProps {}

const SearchResults: React.FC<SearchResultsProps> = () => {
  const { gifs, loading, error, fetchRanks } = useFetchRanks();
  const navigate = useNavigate();


  useEffect(() => {
    fetchRanks();
  }, [fetchRanks]);

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
        Current Top Ranked Gifs:
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && gifs.length === 0 && <p>No Gif Rankings Found.</p>}
      {!loading && !error && gifs.length > 0 && <GifRankings gifs={gifs} onGifSelect={ handleGifSelect } />}
    </div>
  );
};

export default SearchResults;
