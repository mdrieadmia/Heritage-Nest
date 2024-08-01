import { FiBatteryCharging } from "react-icons/fi";
import { GiLift } from "react-icons/gi";
import { PiHouseLine } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { MdOutlinePark } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { IoManOutline } from "react-icons/io5";
import { RiWaterFlashLine } from "react-icons/ri";
import { GiForestCamp } from "react-icons/gi";
import { TiDocumentDelete } from "react-icons/ti";
import { MdSupportAgent } from "react-icons/md";
import { RiParkingLine } from "react-icons/ri";
import { PiComputerTowerLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDeleteBin3Line } from "react-icons/ri";
import { TbIroning2 } from "react-icons/tb";
import { IoWifiOutline } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSportsCricket } from "react-icons/md";
import { PiGraduationCap } from "react-icons/pi";
import { GiKidSlide } from "react-icons/gi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { LiaRunningSolid } from "react-icons/lia";

const Amenities = () => {
    return (
        <div className="mt-[30px] p-6 border rounded-lg mb-20">
            <h1 className="font-semibold text-2xl text-black">Amenities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <FiBatteryCharging/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Power Back Up</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <GiLift />
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Lift</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <PiHouseLine />
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Club House</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <CgGym />
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Gymnasium</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <MdOutlinePark />
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Park</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <LuParkingCircle/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Reserved Parking</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <IoManOutline/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Security</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <RiWaterFlashLine/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Water Storage</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <GiForestCamp/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Privet Garden</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <TiDocumentDelete/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Vaastu Compliant</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <MdSupportAgent/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Service / Goods Lift</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <RiParkingLine/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Visitors Parking </p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <PiComputerTowerLight/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Intercom Facility</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <IoSettingsOutline />
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Maintenance Staff</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <RiDeleteBin3Line/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Waste Disposal</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <TbIroning2/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Laundry Service</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <IoWifiOutline/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Internet Connectivity</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <PiTelevisionSimple/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">DTH Television</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <AiOutlineFire/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Gas Supply</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <MdOutlineSportsCricket/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Outdore Games</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <PiGraduationCap/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Learning Center</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <GiKidSlide/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Kid Play Area</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <TbDeviceGamepad2/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Indore Games</p>
                </div>
                <div className="amenities_item flex items-center gap-3 cursor-pointer">
                    <div className="amenities_icon w-12 h-12 flex justify-center items-center rounded-lg text-3xl ">
                        <LiaRunningSolid/>
                    </div>
                    <p className="amenities_text text-[101010] font-medium">Strolling Track</p>
                </div>
            </div>
        </div>
    );
};

export default Amenities;