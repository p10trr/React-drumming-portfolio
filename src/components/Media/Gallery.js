import React from 'react';
import Carousel from 'react-grid-carousel';

export default function Gallery() {

const photos = [
    "img/finborough.jpg",
    "img/photos/001.jpeg",
    "img/photos/002.jpg",
    "img/photos/003.jpg",
    "img/photos/004.jpg",
    "img/photos/005.jpg",
    "img/photos/006.jpg",
    "img/photos/007.jpg",
    "img/photos/008.jpeg",
    "img/photos/009.jpeg",
    "img/photos/010.jpeg",
    "img/photos/011.jpeg",
    "img/photos/012.jpeg",
    "img/photos/013.jpeg",
    "img/photos/014.jpeg",
    "img/photos/015.jpg",
    "img/photos/016.jpg",
    "img/photos/017.jpg",
    "img/photos/018.jpg",
    "img/photos/019.jpg",
    "img/photos/020.jpg",
    "img/photos/021.jpg",
    "img/photos/022.jpg",
    "img/photos/023.jpeg",
    "img/photos/024.jpg",
    "img/photos/025.jpg",
    "img/photos/027.jpg",
];

  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" src={photos[0]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[1]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[2]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[3]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[4]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[5]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[6]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[7]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[8]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[9]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[10]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[11]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[12]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[13]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[14]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[15]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[16]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[17]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[18]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[19]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[20]} alt='' />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={photos[21]} alt='' />
      </Carousel.Item>
    </Carousel>
  )

}
