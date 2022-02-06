export function getUserData(): unknown{
  return window.localStorage.getItem('user');
}

export function getFavoritesAmount(): unknown{
  return window.localStorage.getItem('favoritesAmount');
}
