import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation"

import SwiperCore, { Navigation, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Autoplay])

const Slider = () => {


    return (
        <Swiper navigation={false} loop={true} autoplay={{
            delay: 3500,
            disableOnInteraction: false
        }} className='h-full md:h-[80%]'>
            <SwiperSlide>
                <Hero image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYvHknnnAs0zgS7MC7d2j4pI587_JllE3rg&usqp=CAU'>
                </Hero>
            </SwiperSlide>
            <SwiperSlide>
                <Hero image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCi4jDwmJSi8zjztZ3Qw_OW7wR6Ie9YQDp1Q&usqp=CAU">
                </Hero>
            </SwiperSlide>
            <SwiperSlide>
                <Hero image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCi4jDwmJSi8zjztZ3Qw_OW7wR6Ie9YQDp1Q&usqp=CAU'>

                </Hero>
            </SwiperSlide>
        </Swiper>
    )
};


const Hero = (props) => {

    const { image } = props

    return (
        <div className='w-full aspect-w-16 aspect-h-9 md:aspect-w-12 md:aspect-h-4 ' >
            <img src={image} className="h-full w-full object-center object-cover" alt="sels" />

        </div >
    )
}

export default Slider;
