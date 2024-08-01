import { GrLocation } from "react-icons/gr";
import Overview from "../../components/Overview/Overview";
import Amenities from "../../components/Amenities/Amenities";
import Services from "../../components/Services/Services";
import NearbyProperties from "../../components/NearbyProperties/NearbyProperties";
import { useEffect, useState } from "react";

const PropertyDetails = () => {
    const [minPrice, setMinPrice] = useState(20);
    const [maxPrice, setMaxPrice] = useState(80);

    useEffect(() => {
        if (minPrice > maxPrice) {
            setMinPrice(maxPrice);
        }
    }, [minPrice, maxPrice]);
    return (
        <div className="inner-shadow">
            <div className="container mx-auto px-5">
                <div className="flex gap-[20px] flex-wrap">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <div>
                            <img className="w-full h-[400px] object-cover mt-[16px]" src="/about3.png" alt="" />
                            <div className="flex justify-between gap-5 mt-5 flex-wrap md:flex-nowrap">
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/about2.avif" alt="" />
                                </div>
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/about3.png" alt="" />
                                </div>
                                <div className="w-full h-[160px] bg-[url('/banner.jpg')] bg-center bg-no-repeat bg-cover">
                                    <div className="bg-black bg-opacity-70 h-full w-full flex justify-center items-center cursor-pointer">
                                        <h4 className="text-xl font-semibold text-white">View More</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Overview />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-1">
                        <div>
                            <div className="bg-[#ECF5FF] p-6 mt-4">
                                <h5 className="text-base font-poppins font-normal text-[#6b7280]">Property Value</h5>
                                <h3 className="text-2xl font-bold text-[#252323] mt-2 mb-4">$300K- $310K</h3>
                                <p className="text-base font-poppins font-normal text-[#6b7280] mb-8">Your bid can not be than 10% of the property minimum value.</p>
                                <p className="text-base font-poppins font-normal text-[#252323]">Min</p>
                                <div className="px-4 py-3 font-inter text-[#252323] bg-white mt-1 mb-3">
                                    $280K
                                </div>
                                <p className="text-base font-poppins font-normal text-[#252323]">Max</p>
                                <div className="px-4 py-3 font-inter text-[#252323] bg-white mt-1 mb-3">
                                    $310K
                                </div>
                                <div>
                                    <div className="flex items-center mt-5">
                                        <input
                                            type="range"
                                            id="minPrice"
                                            min="0"
                                            max="100"
                                            value={minPrice}
                                            className="range-slider1"
                                            onChange={(e) => setMinPrice(parseInt(e.target.value))}
                                        />
                                        <input
                                            type="range"
                                            id="maxPrice"
                                            min="0"
                                            max="100"
                                            value={maxPrice}
                                            className="range-slider2"
                                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="text-sm flex justify-between">
                                        <div className="font-inter text-[#252323] font-medium mt-1 mb-3">
                                            $
                                            <span id="minPriceDisplay">{minPrice * 5}</span>
                                        </div>
                                        <div className="font-inter text-[#252323] font-medium mt-1 mb-3">
                                            $
                                            <span id="maxPriceDisplay">{maxPrice * 5}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center items-center">
                                    <button className="px-[24px] py-[12px] bg-[#0059B1] rounded-[4px] font-semibold text-white hover:bg-blue-400 duration-200">Bid Property</button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <iframe className="w-full h-[420px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11056.521416695645!2d90.3077451233725!3d23.914724178668884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c28cc11db28d%3A0x21fff5636b08c58a!2sZirabo%20Bazar!5e0!3m2!1sen!2sbd!4v1722474372733!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Amenities />
                </div>
                <div>
                    <Services />
                </div>
                <div>
                    <NearbyProperties />
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails; 