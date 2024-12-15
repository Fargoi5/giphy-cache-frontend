import React from 'react';

interface GifItemProps {
  id: string;
  title: string;
  url: string;
  rank?: number;
  onSelect?: (id: string) => void; // Optional callback for selection
}

/**
 * Example usage:
 * import React from 'react';
 * import GifItem from './GifItem';
 *
 * const Example = () => {
 *   const handleSelect = (id: string) => {
 *     console.log(`Selected GIF ID: ${id}`);
 *   };
 *
 *   return (
 *     <GifItem
 *       id="12345"
 *       title="Funny Cat"
 *       url="https://media.giphy.com/media/12345/giphy.gif"
 *       onSelect={handleSelect}
 *     />
 *   );
 * };
 *
 * export default Example;
 *
 * @param id
 * @param title
 * @param url
 * @param onSelect
 * @constructor
 */
const GifItem: React.FC<GifItemProps> = ({ id, title, url, rank, onSelect }) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <div
      className="gif-item"
      onClick={handleClick}
      style={{ cursor: onSelect ? 'pointer' : 'default' }}
    >
      <img
        src={url}
        alt={title}
        className="gif-image"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      />
      <p
        className="gif-title"
        style={{
          marginTop: '8px',
          fontSize: '14px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {title}
      </p>
      {rank && (<p
        className="gif-rank"
        style={{
          marginTop: '8px',
          fontSize: '14px',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {rank}
      </p>)}
    </div>
  );
};

export default GifItem;
