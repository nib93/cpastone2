import React from 'react';
import wallpaper1 from '../app/assets/img/jumbotron/wallpaper1.jpg';
import wallpaper2 from '../app/assets/img/jumbotron/wallpaper2.jpg';
import wallpaper3 from '../app/assets/img/jumbotron/wallpaper3.jpg';
import wallpaper4 from '../app/assets/img/jumbotron/wallpaper4.jpg';
import wallpaper5 from '../app/assets/img/jumbotron/wallpaper5.jpg';
import { useState } from 'react';

const JumbotronCarousel = () => {
    const images = [
        wallpaper1,
        wallpaper2,
        wallpaper3,
        wallpaper4,
        wallpaper5
    ]

    const [ activeIndex, setActiveIndex ] = useState(0);

    return (
        <div id="fullscreenCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image, index) => {
                    return (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#fullscreenCarousel"
                            data-bs-slide-to={index}
                            className={activeIndex === index ? 'active' : ''}
                            aria-current={activeIndex === index ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    );
                }
            )}
            </div>
            <div className="carousel-inner">
                {images.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className={`carousel-item${activeIndex === index ? ' active' : ''}`}
                        >
                            <img 
                                className='d-block w-100 carousel-image'
                                src={image}
                                alt='Jumbotron slides'
                            />
                        </div>
                    );
                    }
                )}
            </div>
            <div className='mb-5 p-4 text-center carousel-text-overlay'>
               <h1 className='fw-bold'>Hike-Spike</h1>
               <p className='lead fst-italic'>Explore the Unseen</p>
               <hr />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#fullscreenCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#fullscreenCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default JumbotronCarousel;