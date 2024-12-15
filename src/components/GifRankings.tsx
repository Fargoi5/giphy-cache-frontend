import React from 'react';
import GifItem from './GifItem';

interface Gif {
  id: string;
  title: string;
  url: string;
  rank: number;
}

interface GifRankingsProps {
  gifs: Gif[];
  onGifSelect?: (id: string) => void;
}

const GifRankings: React.FC<GifRankingsProps> = ({ gifs, onGifSelect }) => {
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
        <div key={gif.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GifItem
            id={gif.id}
            title={gif.title}
            url={gif.url}
            rank={gif.rank}
            onSelect={onGifSelect}
          />
        </div>
      ))}
    </div>
  );
};

export default GifRankings;
