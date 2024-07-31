import { GrLocation } from "react-icons/gr";

const PropertyDetails = () => {
    return (
        <div className="inner-shadow">
            <div className="container mx-auto px-5">
                <div className="flex gap-[60px]">
                    <div className="pt-[45px]">
                        <h3 className="font-inter text-xl font-semibold text-[#010101] ">3 BHK Builder Floor for Sale in Site Ram Bazar Hydrabad</h3>
                        <div className="flex items-center gap-2 mt-3">
                            <GrLocation className="text-2xl text-[#EE6611]" />
                            <p className="text-[#606060] text-lg font-inter">Meadowshire Park, Greenfield, USA</p>
                        </div>
                    </div>
                    <div className="pt-[45px]">
                        <p className="font-inter text-3xl font-black">$300K</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div>
                            <img className="w-full h-[400px] object-cover mt-[16px]" src="/about3.avif" alt="" />
                            <div className="flex justify-between gap-5 mt-5">
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/about2.avif" alt="" />
                                </div>
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/about3.avif" alt="" />
                                </div>
                                <div className="w-full h-[160px] bg-[url('/banner.jpg')] bg-center bg-no-repeat bg-cover">
                                    <div className="bg-black bg-opacity-70 h-full w-full flex justify-center items-center cursor-pointer">
                                        <h4 className="text-xl font-semibold text-white">View More</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-1">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails; 