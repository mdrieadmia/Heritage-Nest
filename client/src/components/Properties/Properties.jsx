import { FaSearch } from "react-icons/fa";

const Properties = () => {
    return (
        <div>
            <div className="container mx-auto px-5 mt-[64px]">
                <div>
                    <div className="flex justify-between gap-5 flex-wrap">
                        <div className="w-full md:w-[50%] flex justify-center">
                            <img className="w-full md:w-[90%]" src="/property1.png" alt="Property Image" />
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <div className="h-[3px] w-12 bg-[#F06711]"></div>
                                <p className="font-inter text-lg font-semibold text-[#F06711]">Property Buying</p>
                            </div>
                            <h3 className="max-w-[580px] font-bold text-[40px] mt-[20px] text-black leading-[52px] font-inter">Efficient and Transparent Home Buying Solutions</h3>
                            <p className="max-w-[590px] mt-[24px] text-base leading-[20px] text-[#667085] font-inter font-medium">It is a log established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="pt-12">
                                <button className="text-lg text-[#005EAE] px-[28px] py-[14px] bg-blue-50 font-semibold font-inter hover:bg-blue-200 duration-300 rounded-[8px] flex justify-center items-center gap-3">
                                    <FaSearch />
                                    Find Property
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between gap-5 flex-wrap mt-[120px]">
                        <div>
                            <div className="flex gap-2 items-center">
                                <div className="h-[3px] w-12 bg-[#F06711]"></div>
                                <p className="font-inter text-lg font-semibold text-[#F06711]">Property Buying</p>
                            </div>
                            <h3 className="max-w-[580px] font-bold text-[40px] mt-[20px] text-black leading-[52px] font-inter">Efficient and Transparent Home Buying Solutions</h3>
                            <p className="max-w-[590px] mt-[24px] text-base leading-[20px] text-[#667085] font-inter font-medium">It is a log established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="pt-12">
                                <button className="text-lg text-[#005EAE] px-[28px] py-[14px] bg-blue-50 font-semibold font-inter hover:bg-blue-200 duration-300 rounded-[8px] flex justify-center items-center gap-3">
                                    <FaSearch />
                                    Find Property
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] flex justify-center">
                            <img className="w-full md:w-[90%]" src="/property2.png" alt="Property Image" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between gap-5 flex-wrap mt-[120px]">
                        <div className="w-full md:w-[50%] flex justify-center">
                            <img className="w-full md:w-[90%]" src="/property3.png" alt="Property Image" />
                        </div>
                        <div>
                            <div className="flex gap-2 items-center">
                                <div className="h-[3px] w-12 bg-[#F06711]"></div>
                                <p className="font-inter text-lg font-semibold text-[#F06711]">Property Buying</p>
                            </div>
                            <h3 className="max-w-[580px] font-bold text-[40px] mt-[20px] text-black leading-[52px] font-inter">Efficient and Transparent Home Buying Solutions</h3>
                            <p className="max-w-[590px] mt-[24px] text-base leading-[20px] text-[#667085] font-inter font-medium">It is a log established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className="pt-12">
                                <button className="text-lg text-[#005EAE] px-[28px] py-[14px] bg-blue-50 font-semibold font-inter hover:bg-blue-200 duration-300 rounded-[8px] flex justify-center items-center gap-3">
                                    <FaSearch />
                                    Find Property
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties;