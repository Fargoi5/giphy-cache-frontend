import React from 'react';
import GifItem from './GifItem';

interface Gif {
  id: string;
  title: string;
  url: string;
}

interface GifListProps {
  gifs: Gif[]; // Array of GIF objects
  onGifSelect?: (id: string) => void;
}


/**
 *
 * Example usage:
 * import React from 'react';
 * import GifList from './GifList';
 *
 * const Example = () => {
 *   const gifs = [
 *     { id: '1', title: 'Funny Cat', url: 'https://media.giphy.com/media/1/giphy.gif' },
 *     { id: '2', title: 'Dancing Dog', url: 'https://media.giphy.com/media/2/giphy.gif' },
 *     { id: '3', title: 'Happy Panda', url: 'https://media.giphy.com/media/3/giphy.gif' },
 *   ];
 *
 *   const handleGifSelect = (id: string) => {
 *     console.log(`Selected GIF ID: ${id}`);
 *   };
 *
 *   return <GifList gifs={gifs} onGifSelect={handleGifSelect} />;
 * };
 *
 * export default Example;
 * @param gifs
 * @param onGifSelect
 * @constructor
 */
const GifList: React.FC<GifListProps> = ({ gifs, onGifSelect }) => {
  if (!gifs || gifs.length === 0) {
    return <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No GIFs found!</p>;
  }

  return (
    <div
      className="gif-list"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px',
      }}
    >
      {gifs.map((gif) => (
        <GifItem
          key={gif.id}
          id={gif.id}
          title={gif.title}
          url={gif.url}
          onSelect={onGifSelect}
        />
      ))}
    </div>
  );
};

export default GifList;
