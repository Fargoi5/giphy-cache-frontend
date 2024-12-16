import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import useFetchGifs from '../hooks/useFetchGifs';
import SearchResults from "../components/SearchResults.tsx";
import { Link } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>('');
  const { loading, fetchGifs } = useFetchGifs();

  // Parse the search query from the URL on initial load
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialQuery = searchParams.get('query');
    if (initialQuery) {
      setQuery(initialQuery);
      fetchGifs(initialQuery);
    }
  }, [location.search, fetchGifs]);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    fetchGifs(searchTerm);

    // Update the URL with the new search query
    navigate(`?query=${encodeURIComponent(searchTerm)}`, { replace: false });
  };

  return (
    <div
      className="main-layout"
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '16px',
      }}
    >
      <header
        style={{
          marginBottom: '24px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#007BFF',
            marginBottom: '8px',
          }}
        >
          GIF Search App
        </h1>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          Find your favorite GIFs by searching below
        </p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ marginTop: '16px' }}>Loading...</p>}

      {query && <SearchResults query={query} />}
      <footer
        style={{
          marginTop: '32px',
          fontSize: '1rem',
          color: '#555',
        }}
      >
        <p>
          <Link to="/rankings" style={{ color: '#007BFF', textDecoration: 'none' }}>
            View Top Ranked Gifs
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
