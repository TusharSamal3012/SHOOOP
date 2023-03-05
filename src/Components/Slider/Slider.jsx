import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.css'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { SliderProducts } from '../../data/products'

const Slider = () => {
    return (
        <>
            <div className="s-container">
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 3
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    navigation={true}
                    loopFillGroupWithBlank={true}


                >
                    {SliderProducts.map((slide, i) => (
                        <SwiperSlide>
                            <div className="left-s">
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                                <span>{slide.price}$</span>
                                <div className='shop_now'>SHOP NOW</div>
                            </div>

                            <img src={slide.img} alt="product" className='img-p' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slider