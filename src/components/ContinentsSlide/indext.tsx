// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Text } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import styles from './Swiper.module.css';

// import required modules
import { Navigation } from "swiper";

import { Container } from "../Container"

export const ContinentsSlide = () => {
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Box
            backgroundImage="/images/europe.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="100%"
            height="335px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="3rem"
              fontWeight="bold"
              color="white"
            >
              Europa
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Box
            backgroundImage="/images/asia.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="100%"
            height="335px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="3rem"
              fontWeight="bold"
              color="white"
            >
              Ásia
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Box
            backgroundImage="/images/africa.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="100%"
            height="335px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="3rem"
              fontWeight="bold"
              color="white"
            >
              África
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Box
            backgroundImage="/images/north-america.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="100%"
            height="335px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="3rem"
              fontWeight="bold"
              color="white"
            >
              América do Norte
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Box
            backgroundImage="/images/south-america.jpg"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="100%"
            height="335px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="3rem"
              fontWeight="bold"
              color="white"
            >
              América do Sul
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}