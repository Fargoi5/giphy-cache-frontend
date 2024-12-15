import React, { useState } from 'react';

/**
 *
 * Example usage:
 * import React from 'react';
 * import SearchBar from './SearchBar';
 *
 * const Example = () => {
 *   const handleSearch = (query: string) => {
 *     console.log(`Search for: ${query}`);
 *     // Perform search logic here, such as calling an API
 *   };
 *
 *   return (
 *     <div>
 *       <h1>Search GIFs</h1>
 *       <SearchBar onSearch={handleSearch} />
 *     </div>
 *   );
 * };
 *
 * export default Example;
 */
interface SearchBarProps {
  onSearch: (query: string) => void; // Callback to trigger the search
  placeholder?: string; // Optional placeholder text
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search for GIFs...' }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '16px',
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{
          width: '300px',
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
