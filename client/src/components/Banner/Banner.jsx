import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="bg-[url('/banner.jpg')]">
                <div className="py-[120px] bg-gradient-to-t from-black/100 to-black/70">
                    <h1 className="max-w-[700px] mx-auto text-[40px] md:text-[50px] lg:text-[64px] text-white font-inter text-center font-bold leading-[66px] md:leading-[85px] lg:leading-[96px]">Your Portal to India&apos;s Exquisite Real Estate</h1>
                    <p className="text-lg font-inter text-[#f9fafb] text-center mt-8">Seamlessly connecting you to the hearbeat of India&apos;s prime properties.</p>
                    <div className="flex justify-center items-center pt-12">
                        <button className="text-lg text-white px-[28px] py-[14px] bg-[#005EAE] hover:bg-blue-400 duration-300 rounded-[8px] flex justify-center items-center gap-3">
                            <FaSearch/>
                            Find Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;