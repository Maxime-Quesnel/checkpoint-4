import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Slider from 'react-slick';

import './Testimonial.scss';

import TestimonialCard from './TestimonialCard/TestimonialCard';

const Testimonial = () => {
  const [data, setData] = useState([]);

  function getInfos() {
    axios.get('http://localhost:8000/api/testimonial/all').then(res => {
      setData(res.data);
    });
  }

  useEffect(() => {
    getInfos();
  }, []);

  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    pauseOnHover: true
  };

  return (
    <div className='testimonial__globalContainer' id='testimonial'>
      <h1 className='testimonial__title'>Recommandation</h1>
      <div className='carousel'>
        <Slider {...carouselSettings}>
          {data.map(el => {
            return (
              <div className='testimonial__centerCard'>
                <TestimonialCard {...el} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
