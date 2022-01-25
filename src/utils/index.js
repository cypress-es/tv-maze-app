import placeholder from '../assets/placeholder.jpeg';

export const imagePlaceHolder = (image, key) => (
  image ? image[key] : placeholder
);
