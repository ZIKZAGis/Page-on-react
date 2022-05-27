import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from "swiper";
import Image from "../elements/image";
import { StyledSider, StyledButton, SlyderWrapper } from "./styled";
import "swiper/swiper.scss"
import { useRef } from 'react';

function Slider({ images }) {
    SwiperCore.use([Navigation]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <SlyderWrapper>
            {/* Кастомные кнопки */}
            <StyledButton left ref={navigationPrevRef} title="назад">&lt;</StyledButton>
            <StyledButton right ref={navigationNextRef} title="вперед">&gt;</StyledButton>         
            <StyledSider 
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
                freeMode
                watchSlidesProgress
                slidesPerView={1} 
                spaceBetween={20} 
                loop
            >
                {images &&
                images.length &&
                images.map((image) => (
                    <SwiperSlide key={image}>
                    <Image
                        src={image}
                        alt="изображение продукта"
                        width="200"
                        height="257"
                        maxWidth="200"
                    />
                    </SwiperSlide>
                ))}
            </StyledSider>            
        </SlyderWrapper>

    );
  }

export default Slider;