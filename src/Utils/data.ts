import {images} from '../Assets/Images/ImageAssets';

export const singers = [
  {id: '1', name: 'Artist One', image: images.rdj}, // Using local image
  {id: '2', name: 'Artist Two', image: images.rdj}, // Using local image
];

export const trendingSongs = [
  {id: '1', name: 'Song One', singer: 'Artist One', cover: images.rdj}, // Using local image
  {id: '2', name: 'Song Two', singer: 'Artist Two', cover: images.rdj}, // Using local image
  {id: '12', name: 'Song One', singer: 'Artist One', cover: images.rdj}, // Using local image
  {id: '22', name: 'Song Two', singer: 'Artist Two', cover: images.rdj}, // Using local image
];

export const topPicksSongs = [
  {id: '1', name: 'Pick One', singer: 'Artist One', cover: images.rdj}, // Using local image
  {id: '2', name: 'Pick Two', singer: 'Artist Two', cover: images.rdj}, // Using local image
  {id: '12', name: 'Pick One', singer: 'Artist One', cover: images.rdj}, // Using local image
  {id: '22', name: 'Pick Two', singer: 'Artist Two', cover: images.rdj}, // Using local image
];

export const sections = [
  {
    title: 'Your top genres',
    data: [
      { id: '1', name: 'Rock' },
      { id: '2', name: 'Pop' },
    ],
  },
  {
    title: 'Browse All',
    data: [
      { id: '3', name: 'Jazz' },
      { id: '4', name: 'Classical' },
      { id: '5', name: 'Hip Hop' },
      { id: '6', name: 'Electronic' },
      { id: '13', name: 'Jazz' },
      { id: '14', name: 'Classical' },
      { id: '15', name: 'Hip Hop' },
      { id: '16', name: 'Electronic' },
    ],
  },
];