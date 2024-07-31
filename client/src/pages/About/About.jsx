import Consultation from '../../components/Consultation/Consultation';
import OurTeam from '../../components/OurTeam/OurTeam';
import Testimonials from '../../components/Testimonials/Testimonials';
import Counter from './../../components/Counter/Counter';
const About = () => {
    return (
        <div>
            <div className="w-full h-[320px] bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className='container mx-auto px-5'>
                <Counter />
                <div className='mt-[58px] mb-20'>
                    <div className='pb-44'>
                        <div className='relative w-full'>
                            <div className="bg-[url('/about2.avif')] w-[72%] h-[455px] bg-center bg-cover bg-no-repeat">
                                <div className='bg-black bg-opacity-60 h-full w-full pt-[61px]'>
                                    <img className='h-[230px] w-[250px] object-cover ml-[120px]' src="/about2.avif" alt="" />
                                </div>
                            </div>
                            <div className='bg-[#ECF5FF] max-w-[592px] p-8 absolute -bottom-32 right-0'>
                                <div className="flex gap-2 items-center">
                                    <div className="h-[3px] w-12 bg-[#F06711]"></div>
                                    <p className="font-inter text-lg font-semibold text-[#F06711]">Our Story</p>
                                </div>
                                <h2 className='text-[36px] font-bold text-[#1f2937] leading-[48px] mt-4'>Efficient and Transparent Home Buying Solutions.</h2>
                                <p className='text-[#6b7280] text-base font-poppins font-medium mt-6 leading-[24px]'>In the symphony of busting markets and serene landscapes, Heritage-Nest was bord -a vision to.</p>
                            </div>
                        </div>
                    </div>
                    <div className='pb-40'>
                        <div className='relative w-full flex justify-end'>
                            <div className="bg-[url('/about4.avif')] w-[65%] h-[455px] bg-center bg-cover bg-no-repeat">
                                <div className='bg-black bg-opacity-60 h-full w-full pt-[61px]'>
                                    <img className='h-[230px] w-[250px] object-cover ml-[120px]' src="/about4.avif" alt="" />
                                </div>
                            </div>
                            <div className='bg-[#FDF0E7] max-w-[592px] p-8 absolute -bottom-32 left-0'>
                                <div className="flex gap-2 items-center">
                                    <div className="h-[3px] w-12 bg-[#F06711]"></div>
                                    <p className="font-inter text-lg font-semibold text-[#F06711]">Mission Statement</p>
                                </div>
                                <h2 className='text-[36px] font-bold text-[#1f2937] leading-[48px] mt-4'>Efficient and Transparent Home Buying Solutions.</h2>
                                <p className='text-[#6b7280] text-base font-poppins font-medium mt-6 leading-[24px]'>To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread cooonecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <OurTeam/>
                <Consultation/>
                <Testimonials/>
            </div>
        </div>
    );
};

export default About;