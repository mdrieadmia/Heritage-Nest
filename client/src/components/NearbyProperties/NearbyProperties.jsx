import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { BsImage } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import useNearbyProperties from '../../hooks/useNearbyProperties';
import { TbFidgetSpinner } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const NearbyProperties = () => {

    const [nearbyProperties, isLoading] = useNearbyProperties()

    if (isLoading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin text-3xl text-orange-600" />
        </div>
    }
    return (
        <div className="container mx-auto px-5 mt-10">
            <div className="flex justify-between items-center flex-wrap gap-5">
                <h1 className="font-semibold text-[#111827] text-2xl lg:text-[32px] text-wrap">Others Nearby Properties</h1>
                <p className="cursor-pointer font-semibold font-poppins underline text-[#0059b1] text-[18px] text-nowrap">See all property</p>
            </div>
            <div className='mt-8'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={false}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        nearbyProperties.map(popular => {
                            return <SwiperSlide key={popular._id}>
                                <Link to={`/details/${popular._id}`}>
                                    <div className='w-full rounded-lg border mb-10'>
                                        <div className='w-full relative'>
                                            <img className='w-full h-[200px] rounded-t-md object-cover' src={popular.primaryImage} alt="" />
                                            <div className='px-2 py-1 text-lg absolute bottom-4 left-4 bg-white rounded-md flex justify-center gap-2 items-center'>
                                                <BsImage className='text-[#EE6611]' />
                                                <p className='font-semibold text-black'>20</p>
                                            </div>
                                        </div>
                                        <div className='p-6'>
                                            <div className='flex justify-between items-center mb-3 flex-wrap gap-3'>
                                                <div className='bg-[#C5E2FF] px-2 py-1 font-poppins text-sm text-[#00254a] inline-block rounded-md'>
                                                    <p>{popular.type}</p>
                                                </div>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <div className='h-3 w-3 bg-[#EE6611] rounded-sm'></div>
                                                    <p className='font-poppins text-gray-900 font-medium'>Ready to Move</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div>
                                                <h4 className='font-semibold text-xl text-[#111827] mt-2'>{popular.name}</h4>
                                                <div className='flex gap-1 mt-1 items-center'>
                                                    <GrLocation className='text-xl text-[#EE6611]' />
                                                    <p className='font-poppins text-[#6b7280]'>{popular.location}</p>
                                                </div>
                                                <h3 className='text-2xl font-semibold text-[#111827] mt-6'>${popular.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        })
                    }

                </Swiper>
            </div>
            <hr className='border my-16' />
        </div>
    );
};

export default NearbyProperties;