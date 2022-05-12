import * as React from 'react';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper';
import { LeftArrow } from '../../images/leftArrow.js';
import { RightArrow } from '../../images/rightArrow.js';

import './teamSwiper.scss';

const TeamSwiper = ({ data }) => {
  const [swipeInstance, setSwipeInstance] = useState(null);
  return (
    <div className='team-swiper-container'>
      <div className='custom-swiper-navigation'>
        <p className='teammember__header'>The Lunchbox Team</p>
        <div
          className='custom-swiper-navigation__control'
          onClick={() => swipeInstance?.slidePrev()}
        >
          <LeftArrow />
        </div>
        <hr className='custom-swiper-navigation--hide-mobile' />
        <p className='custom-swiper-navigation--hide-mobile'>Drag to view</p>
        <hr className='custom-swiper-navigation--hide-mobile' />
        <div
          className='custom-swiper-navigation__control'
          onClick={() => swipeInstance?.slideNext()}
        >
          <RightArrow />
        </div>
      </div>

      <Swiper
        grabCursor={true}
        loop={true}
        freeMode={true}
        modules={[FreeMode]}
        slidesPerView={'auto'}
        spaceBetween={30}
        onBeforeInit={(swipper) => setSwipeInstance(swipper)}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='teammember__card'>
                <div className='teammember__card-img-container'>
                  <img src={item.photo.file.url} />
                </div>
                <p className='teammember__title'>{item.title}</p>
                <p className='teammember__name'>{item.name}</p>
                <p className='teammember__bio'>{item.bio.bio}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSwiper;
