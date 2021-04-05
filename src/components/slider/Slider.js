import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.scss';


function Slider() {
    return (
        <Swiper
        slidesPerView = {1}
        spaceBetween = {2}
        navigation
        >
        <>
            <SwiperSlide>
                <img className={s.slide} src={bottle} alt="Salt Bottle"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={s.slide} src={bottle} alt="Salt Bottle"/>
            </SwiperSlide>
            <SwiperSlide>
                <img className={s.slide} src={bottle} alt="Salt Bottle"/>
            </SwiperSlide>
        </>
        </Swiper>
    );
}

export default Slider;

