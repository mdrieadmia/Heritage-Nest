import { BsFillHouseCheckFill, BsShopWindow } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa6";

const Overview = () => {
    return (
        <div className="mt-5 border rounded-lg p-6">
            <h4 className="text-2xl font-semibold text-black">Overview</h4>
            <div className="shadow-md bg-white flex justify-between mt-8 gap-5 flex-wrap">
                <div className="flex gap-3 p-4">
                    <FaBed className="text-2xl text-[#1c1b1f]" />
                    <p className="font-inter font-bold">2 <span className="text-base font-normal text-[#303030]">Beds</span></p>
                </div>
                <div className="flex gap-3 p-4">
                    <FaBath className="text-2xl text-[#1c1b1f]" />
                    <p className="font-inter font-bold">2 <span className="text-base font-normal text-[#303030]">Bath</span></p>
                </div>
                <div className="flex gap-3 p-4">
                    <BsShopWindow className="text-2xl text-[#1c1b1f]" />
                    <p className="font-inter font-bold">2 <span className="text-base font-normal text-[#303030]">Balcony</span></p>
                </div>
                <div className="flex gap-3 p-4">
                    <BsFillHouseCheckFill className="text-2xl text-[#1c1b1f]" />
                    <p className="font-inter font-bold"><span className="text-base font-normal text-[#303030]">Fully Furnished</span></p>
                </div>
            </div>
            <div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7 gap-10">
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">Carpet Area</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">2000 sqft</h2>
                        <p className="text-[#535353] text-nowrap">$2255/sqft</p>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">flore</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">Second (Out of 6th floor)</h2>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">Transaction Type</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">Ready to move</h2>
                    </div>
                    <div className="w-full col-span-1">
                        <h3 className="text-[#5c5c5c]">Lift</h3>
                        <h2 className="text-[#101010] font-medium">1</h2>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7 gap-10">
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">Facing</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">North-East</h2>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">Additional Rooms</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">1 Guest Room</h2>
                    </div>
                    <div className="w-full col-span-2">
                        <h3 className="text-[#5c5c5c] text-nowrap">Age of Construction</h3>
                        <h2 className="text-[#101010] font-medium text-nowrap">New Construction</h2>
                    </div>
                    <div className="w-full col-span-1">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;