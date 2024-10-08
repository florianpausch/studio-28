import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Loop } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay]);

const InstagramSlider = () => {
  useEffect(() => {
    // Instagram-Embed-Script laden
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={3} // Anzahl der sichtbaren Posts
    >
      <SwiperSlide>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DAWhWEgyEyd/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%',
            WebkitCalc: '100% - 2px',
            calc: '100% - 2px',
          }}
        >
          {/* Post 1 */}
        </blockquote>
      </SwiperSlide>

      <SwiperSlide>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/CBWhWEgyEyd/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%',
            WebkitCalc: '100% - 2px',
            calc: '100% - 2px',
          }}
        >
          {/* Post 2 */}
        </blockquote>
      </SwiperSlide>

      <SwiperSlide>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/DCWhWEgyEyd/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%',
            WebkitCalc: '100% - 2px',
            calc: '100% - 2px',
          }}
        >
          {/* Post 3 */}
        </blockquote>
      </SwiperSlide>

      {/* Weitere Posts... */}
    </Swiper>
  );
};

export default InstagramSlider;
