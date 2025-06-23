import { useFavorites } from '../context/FavoriteContext';

const FavoriteButton = ({ item }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(item.id);

  return (
    <button
      onClick={() => toggleFavorite(item)}
      style={{
        cursor: 'pointer',
        fontSize: '1.5rem',
        background: 'none',
        border: 'none'
      }}
      aria-label="Favoritar"
    >
      {favorite ? '⭐' : '☆'}
    </button>
  );
};

export default FavoriteButton;
