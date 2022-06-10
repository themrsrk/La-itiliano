import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useReducer(null);
  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 3000
    }
  }
  const gallery_images = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  return (
    <div className="flex__center app__gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum corporis velit cum commodi sed, sit eius quia voluptas rem dicta?</p>
        <button type="button" className="custom__button">View more</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {gallery_images.map((image, index) => {
            return (
              <div className="app__gallery-images-card flex__center" key={`gallery_image-${index + 1}`}>
                < img src={image} alt="Gallery Image" />
                <BsInstagram className="app__gallery-image-icon" />
              </div>
            )
          })}
        </div>
        <div className="app__gallery-images-arrow">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => { scroll('left') }} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => { scroll('right') }} />
        </div>
      </div>
    </div >
  )
};

export default Gallery;
