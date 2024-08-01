import { TbSmartHome } from "react-icons/tb";

const Services = () => {
    return (
        <div>
            <div className="container mx-auto px-5 mb-[32px] mt-[64px]">
                <h3 className="text text-[32px] lg:text-[40px] text-[#181818] font-semibold mb-16 text-center">Other Services</h3>
                <div className="flex justify-between gap-5 flex-col lg:flex-row">
                    <div className="p-6 bg-[#ecf5ff] rounded-[4px] flex gap-5 w-full flex-col md:flex-row">
                        <div className="w-12 p-3 h-12 flex justify-center items-center rounded-[4px] bg-[#ee6611] text-white">
                            <TbSmartHome className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-[#111827] leading-[32px]">Advanced Property Search</h3>
                            <p className="text-[#6b7280] max-w-[260px] mt-4 font-poppins font-medium leading-6">Effortiessly find your dream property with advanced search filters.</p>
                        </div>
                    </div>
                    <div className="p-6 bg-[#ecf5ff] rounded-[4px] flex gap-5 w-full flex-col md:flex-row">
                        <div className="w-12 p-3 h-12 flex justify-center items-center rounded-[4px] bg-[#ee6611] text-white">
                            <TbSmartHome className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-[#111827] leading-[32px]">Virtual Tours and Multimedia</h3>
                            <p className="text-[#6b7280] max-w-[260px] mt-4 font-poppins font-medium leading-6">Explore properties through immersive virtual tours and HD Photos.  </p>
                        </div>
                    </div>
                    <div className="p-6 bg-[#ecf5ff] rounded-[4px] flex gap-5 w-full flex-col md:flex-row">
                        <div className="w-12 p-3 h-12 flex justify-center items-center rounded-[4px] bg-[#ee6611] text-white">
                            <TbSmartHome className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-[#111827] leading-[32px]">Secure Online Transactions</h3>
                            <p className="text-[#6b7280] max-w-[260px] mt-4 font-poppins font-medium leading-6">Ensure secure transactions and e-sign documents semlessly online.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;