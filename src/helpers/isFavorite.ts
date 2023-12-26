import { FavoriteType } from '../types';

const isFavorite = (favorites: FavoriteType[], theId: string) => {
  return favorites.some((favorite) => favorite.id === theId);
};

export default isFavorite;
