"use client";

import React from 'react'
import Alibum from "../assets/media/PERSONA5.svg"
import HSJ from "../assets/media/THUNDERSONIA.svg"
import BL from "../assets/media/ONESNOWMAN.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay,EffectFade } from 'swiper/modules';

function ListSong() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay,EffectFade]}
                className="w-full hidden sm:w-[205px] rounded-lg"
            >
                <SwiperSlide>
                    <img src={Alibum.src} alt="Persona" className="hidden sm:block sm:h-full rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HSJ.src} alt="Persona" className="hidden sm:block sm:h-full rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={BL.src} alt="Persona" className="hidden sm:block sm:h-full rounded-lg" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ListSong