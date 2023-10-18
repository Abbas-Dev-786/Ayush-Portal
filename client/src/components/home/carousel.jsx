// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import {Autoplay, Pagination} from 'swiper/modules'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'



export default () => {
  return (
    <Swiper className='slider'
   
      modules={[Autoplay, Pagination]}
      autoplay={
        {delay: 2500,}

      }
      pagination={
        {clickable: true}
      }
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      
            
    >
      
      <SwiperSlide className='slide'>
      <Box
            component="img"
            height="100%"
            src="./images/Images/slider2.jpg"
            className="side-image"
        >

        </Box>
      </SwiperSlide>
      <SwiperSlide className='slide'>
        <Box
            component="img"
            height="100%"
            src="./images/Images/slider1.jpg"
            className="side-image"

        
        >

        </Box>
                        </SwiperSlide>
      <SwiperSlide className='slide'>
      <Box
            component="img"
            height="100%"
            src="./images/Images/slider3.jpg"
            className="side-image"
        >

        </Box>
      </SwiperSlide>
    </Swiper>
  );
};