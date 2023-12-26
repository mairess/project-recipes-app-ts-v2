import { FavoriteType } from '../types';

const removeFavorite = (favorites: FavoriteType[], theId: string) => {
  return favorites.filter((favorite) => favorite.id !== theId);
};

export default removeFavorite;
