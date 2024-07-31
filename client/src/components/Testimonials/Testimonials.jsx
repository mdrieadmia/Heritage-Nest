import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { IoStar } from 'react-icons/io5';

const Testimonials = () => {
    return (
        <div>
            <h2 className="text-[40px] font-bold text-[#181818] text-center">Testimonials</h2>
            <div>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={2}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='text-center bg-[#ECF5FF] p-8 mt-16 mb-10'>
                            <div className='text-yellow-600 flex gap-1 text-lg justify-center items-center mb-6'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                            <p className='max-w-[528px] mx-auto my-3 font-poppins text-lg text-[#818181]'> &apos;&apos;The level of security provided by Heritage Nest is unmatched. I feel confident using my porpary for both everyday leaving and staying. It is the peace of mind I was looking for.&apos;&apos;</p>
                            <div>
                                <img className='h-12 w-12 mx-auto rounded-full object-cover' src="/user1.png" alt="User Image" />
                                <p className='text-xl font-semibold text-[#111827]'>Tony Stark</p>
                                <p>Marketing Manager, EDISON Group.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#ECF5FF] p-8 mt-16 mb-10'>
                            <div className='text-yellow-600 flex gap-1 text-lg justify-center items-center mb-6'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                            <p className='max-w-[528px] mx-auto my-3 font-poppins text-lg text-[#818181]'> &apos;&apos;The level of security provided by Heritage Nest is unmatched. I feel confident using my porpary for both everyday leaving and staying. It is the peace of mind I was looking for.&apos;&apos;</p>
                            <div>
                                <img className='h-12 w-12 mx-auto rounded-full object-cover' src="/user2.png" alt="User Image" />
                                <p className='text-xl font-semibold text-[#111827]'>Devid Alva</p>
                                <p>Marketing Manager, EDISON Group.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#ECF5FF] p-8 mt-16 mb-10'>
                            <div className='text-yellow-600 flex gap-1 text-lg justify-center items-center mb-6'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                            <p className='max-w-[528px] mx-auto my-3 font-poppins text-lg text-[#818181]'> &apos;&apos;The level of security provided by Heritage Nest is unmatched. I feel confident using my porpary for both everyday leaving and staying. It is the peace of mind I was looking for.&apos;&apos;</p>
                            <div>
                                <img className='h-12 w-12 mx-auto rounded-full object-cover' src="/user3.png" alt="User Image" />
                                <p className='text-xl font-semibold text-[#111827]'>Thomas Grab</p>
                                <p>Marketing Manager, EDISON Group.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='text-center bg-[#ECF5FF] p-8 mt-16 mb-10'>
                            <div className='text-yellow-600 flex gap-1 text-lg justify-center items-center mb-6'>
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                            </div>
                            <p className='max-w-[528px] mx-auto my-3 font-poppins text-lg text-[#818181]'> &apos;&apos;The level of security provided by Heritage Nest is unmatched. I feel confident using my porpary for both everyday leaving and staying. It is the peace of mind I was looking for.&apos;&apos;</p>
                            <div>
                                <img className='h-12 w-12 mx-auto rounded-full object-cover' src="/user4.png" alt="User Image" />
                                <p className='text-xl font-semibold text-[#111827]'>Jhon Smith</p>
                                <p>Marketing Manager, EDISON Group.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;