import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "./style.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function HeroSection() {
  return (
    <>
      <Swiper className='slide'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation style={{color:'white'}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='slide_element' >
          <div className='wrapper' style={{ position: "absolute", zIndex: 999 }}>
            <div className='elements'>
              <h1>modern design</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fuga, accusantium ipsum eaque esse corrupti odit necessitatibus officia in doloremque unde? Magni  </p>
              <ul>
                <li>get started</li>
                <li>download</li>
              </ul>
            </div>
          </div>
          <img style={{ height: "calc(100vh - 217px)", minHeight: " 700px", width: "100%" }} src="	https://preview.colorlib.com/theme/hexa/images/slider-1.jpg" alt="slide1" />
        </SwiperSlide>
        <SwiperSlide className='slide_element'>
          <div className='wrapper' style={{ position: "absolute", zIndex: 999 }}>
            <div className='elements'>
              <h1>graphic design</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo corporis fuga, accusantium ipsum eaque esse corrupti odit necessitatibus officia in doloremque unde? Magni  </p>
              <ul>
                <li>get started</li>
                <li>download</li>
              </ul>
            </div>
          </div>
          <img style={{ height: "calc(100vh - 217px)", minHeight: " 700px", width: "100%" }} src="	https://preview.colorlib.com/theme/hexa/images/slider-2.jpg" alt="slide2" />
        </SwiperSlide>
      </Swiper>
      <div>

      </div>
    </>
  )
}

export default HeroSection