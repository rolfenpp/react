import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {Autoplay} from 'swiper'

import '../components/swiperx.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import dbrow from '../assets/dbrow.jpg'
import deadlift from '../assets/deadlift.jpg'
import personlake from '../assets/personlake.jpg'



const Swiperx = () => {
    return (
    <div className="swiper">

    <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        navigation
        
        effect 
        speed={700}
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 2500, disableOnInteraction: false}}
        /* className={styles.myswiper} */>
        <SwiperSlide><img src={personlake}/></SwiperSlide>
        <SwiperSlide><img src={deadlift}/></SwiperSlide>
        <SwiperSlide><img src={dbrow}/></SwiperSlide>

    </Swiper>
    
   



    </div>)
}

export default Swiperx