import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div>
            <h2 className="text-[40px] font-bold text-[#181818] text-center">Testimonials</h2>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;