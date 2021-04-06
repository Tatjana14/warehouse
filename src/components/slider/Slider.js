import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation} from 'swiper';
import './Slider.scss';
import bottle from '../../assets/img/saltBottle.png';

SwiperCore.use([Navigation]);


function Slider() {
    return (
        <div className="sliderContainer">
            <Swiper
            slidesPerView={1}
            navigation
            >
                <SwiperSlide>
                    <img  className="img" src={bottle} alt="Salt Bottle"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img" src={bottle} alt="Salt Bottle"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="img" src={bottle} alt="Salt Bottle"/>
                </SwiperSlide>
            </Swiper>
        </div>

    );
}

export default Slider;

