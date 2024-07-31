
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Counter = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[53px] gap-8">
            <div className="p-6 bg-[#fdf0e7] rounded-[5px] counterbox duration-200 cursor-pointer">
                <h3 className="text-[40px] textshadow1 font-bold text-[#d95d0f] ">2k+</h3>
                <p className="text-[#1f2937] font-poppins textshadow1">New Flat Listed</p>
                <div className="mt-8 text-[#ee6611] flex justify-between items-center">
                    <Link to={'/'} className="underline hover:text-blue-800 duration-200">View All</Link>
                    <div>
                        <IoArrowDownCircleOutline className="text-3xl" />
                    </div>
                </div>
            </div>
            <div className="p-6 bg-[#ecf5ff] rounded-[5px] counterbox duration-200 cursor-pointer">
                <h3 className="text-[40px] textshadow1 font-bold text-[#0051a1] ">2k+</h3>
                <p className="text-[#1f2937] font-poppins textshadow1">New Flat Listed</p>
                <div className="mt-8 text-[#0051a1] flex justify-between items-center">
                    <Link to={'/'} className="underline hover:text-blue-800 duration-200">View All</Link>
                    <div>
                        <IoArrowDownCircleOutline className="text-3xl" />
                    </div>
                </div>
            </div>
            <div className="p-6 bg-[#fdf0e7] rounded-[5px] counterbox duration-200 cursor-pointer">
                <h3 className="text-[40px] textshadow1 font-bold text-[#d95d0f] ">2k+</h3>
                <p className="text-[#1f2937] font-poppins textshadow1">New Flat Listed</p>
                <div className="mt-8 text-[#ee6611] flex justify-between items-center">
                    <Link to={'/'} className="underline hover:text-blue-800 duration-200">View All</Link>
                    <div>
                        <IoArrowDownCircleOutline className="text-3xl" />
                    </div>
                </div>
            </div>
            <div className="p-6 bg-[#ecf5ff] rounded-[5px] counterbox duration-200 cursor-pointer">
                <h3 className="text-[40px] textshadow1 font-bold text-[#0051a1] ">2k+</h3>
                <p className="text-[#1f2937] font-poppins textshadow1">New Flat Listed</p>
                <div className="mt-8 text-[#0051a1] flex justify-between items-center">
                    <Link to={'/'} className="underline hover:text-blue-800 duration-200">View All</Link>
                    <div>
                        <IoArrowDownCircleOutline className="text-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;