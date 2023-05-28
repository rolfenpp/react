import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '../components/deals.css'

import gymp01 from '../assets/gymp01.jpeg'
import gymp02 from '../assets/gymp02.jpg'
import gymp03 from '../assets/gymp03.jpg'
import gymp04 from '../assets/gymp04.jpg'

const Deals = () =>{
    return (
        <div className="deals">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={10}
            effect 
            speed={900}
            slidesPerView={2}
            loop={true}
            autoplay={{delay: 2500, disableOnInteraction: false}}>

        <SwiperSlide><img src={gymp01}/></SwiperSlide>
        <SwiperSlide><img src={gymp02}/></SwiperSlide>
        <SwiperSlide><img src={gymp03}/></SwiperSlide>
        <SwiperSlide><img src={gymp04}/></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Deals;