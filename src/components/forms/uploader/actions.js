import Resizer from 'react-image-file-resizer';

export const compressFile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      2000,
      2000,
      'WEBP',
      70,
      0,
      uri => resolve(uri),
      'base64',
      1200,
      1200
    );
  });
