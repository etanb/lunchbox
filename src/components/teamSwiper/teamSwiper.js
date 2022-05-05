import * as React from 'react';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper';
import leftArrow from '../../images/leftArrow.svg';
import rightArrow from '../../images/rightArrow.svg';

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
          <img src={leftArrow} />
        </div>
        <hr />
        <p>Drag to view</p>
        <hr />
        <div
          className='custom-swiper-navigation__control'
          onClick={() => swipeInstance?.slideNext()}
        >
          <img src={rightArrow} />
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