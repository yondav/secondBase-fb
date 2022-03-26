export const toTitle = str =>
  str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
    .join(' ');

export const uid = tag => {
  return `${tag}_${Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))}`;
};
