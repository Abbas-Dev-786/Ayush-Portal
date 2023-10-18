// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';


// Import Swiper styles
import 'swiper/css';


export default () => {
  return (
    <Swiper className='slider'
      
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