import React from 'react';
import GifItem from './GifItem';

interface GifRank {
  id: string;
  gif_id: string;
  title: string;
  url: string;
  rank: number;
}

interface GifRankingsProps {
  gifs: GifRank[];
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
            gif_id={gif.gif_id}
            onSelect={onGifSelect}
          />
        </div>
      ))}
    </div>
  );
};

export default GifRankings;
