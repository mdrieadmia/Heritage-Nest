import { useState } from "react";
import { useForm } from "react-hook-form"
import { GrLocation } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { RiHome8Line } from "react-icons/ri";
import { AiOutlineDollar } from "react-icons/ai";
import Counter from "../../components/Counter/Counter";
import PopularProperties from "../../components/PopularProperties/PopularProperties";
import NewListed from "../../components/NewListed/NewListed";
import Testimonials from "../../components/Testimonials/Testimonials";

const Buy = () => {
    const [category, setCategory] = useState('buy')
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleSearch = (data) => {
        console.log(data);
    }

    return (
        <div>
            <div className="w-full h-[309px] bg-[url('/buy.jpeg')] bg-cover bg-center bg-no-repeat">
                <div className="h-full w-full bg-gradient-to-t from-black/70 to-black/40"></div>
            </div>
            <div className="container mx-auto px-5">
                <div>
                    <div className="max-w-[984px] p-8 bg-white rounded-[8px] mx-auto search-form -mt-[200px]">
                        <div>
                            <ul className="flex gap-10 border-blue-50 flex-wrap text-center">
                                <li onClick={() => setCategory('buy')} className={`font-inter font-medium cursor-pointer pb-1 text-base leading-6 border-b-[2px] hover:border-[#0059b1] duration-200 ${category == 'buy' ? 'border-[#0059b1] text-[#0059b1]' : 'text-[#4b5563] border-transparent'}`}>Buy</li>

                                <li onClick={() => setCategory('rent')} className={`font-inter font-medium cursor-pointer pb-1 text-base leading-6 border-b-[2px] hover:border-[#0059b1] duration-200 ${category == 'rent' ? 'border-[#0059b1] text-[#0059b1]' : 'text-[#4b5563] border-transparent'}`}>Rent</li>

                                <li onClick={() => setCategory('pg')} className={`font-inter font-medium cursor-pointer pb-1 text-base leading-6 border-b-[2px] hover:border-[#0059b1] duration-200 ${category == 'pg' ? 'border-[#0059b1] text-[#0059b1]' : 'text-[#4b5563] border-transparent'}`}>PG</li>

                                <li onClick={() => setCategory('plot')} className={`font-inter font-medium cursor-pointer pb-1 text-base leading-6 border-b-[2px] hover:border-[#0059b1] duration-200 ${category == 'plot' ? 'border-[#0059b1] text-[#0059b1]' : 'text-[#4b5563] border-transparent'}`}>Plot</li>

                                <li onClick={() => setCategory('commercial')} className={`font-inter font-medium cursor-pointer pb-1 text-base leading-6 border-b-[2px] hover:border-[#0059b1] duration-200 ${category == 'commercial' ? 'border-[#0059b1] text-[#0059b1]' : 'text-[#4b5563] border-transparent'}`}>Commercial</li>
                            </ul>
                            <div className="w-full h-[3px] bg-blue-50 -mt-[2px]"></div>
                        </div>
                        <form onSubmit={handleSubmit(handleSearch)} className="mt-8 relative">
                            <div className="absolute text-2xl top-[14px] left-4 text-[#6B7280]">
                                <IoSearch />
                            </div>
                            <input className="block w-full px-12 py-3 font-poppins placeholder:font-poppins placeholder:text-[#6B7280] focus-visible:outline-none border border-gray-300 rounded-md" placeholder="Search Properties" name="properties" {...register("properties", { required: true })} />
                            {errors.properties && <span className="text-red-600">This field is required</span>}
                            <div className="mt-8 flex justify-between gap-5 flex-wrap md:flex-nowrap">
                                <div className="w-full">
                                    <div className="flex gap-1 items-center">
                                        <GrLocation className="text-xl mb-[2px] text-[#ee6611]" />
                                        <p className="font-inter text-lg font-semibold text-[#181818] text-nowrap">Your Location</p>
                                    </div>
                                    <select className="p-3 block w-full bg-blue-50 rounded-md mt-3" name="location" {...register("location", { required: true })}>
                                        <option value="">Select Location</option>
                                        <option value="california">California</option>
                                        <option value="alaska">Alaska</option>
                                        <option value="florida">Florida</option>
                                        <option value="georgia">Georgia</option>
                                        <option value="alabama">Alabama</option>
                                    </select>
                                    {errors.location && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="w-full">
                                    <div className="flex gap-1 items-center">
                                        <RiHome8Line className="text-xl mb-[2px] text-[#ee6611]" />
                                        <p className="font-inter text-lg font-semibold text-[#181818] text-nowrap">Property Type</p>
                                    </div>
                                    <select className="p-3 block w-full bg-blue-50 rounded-md mt-3" name="propertyType" {...register("propertyType", { required: true })}>
                                        <option value="">Property Type</option>
                                        <option value="house">House</option>
                                        <option value="factory">Factory</option>
                                        <option value="hostels">Hostels</option>
                                    </select>
                                    {errors.propertyType && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="w-full">
                                    <div className="flex gap-1 items-center">
                                        <AiOutlineDollar className="text-xl mb-[2px] text-[#ee6611]" />
                                        <p className="font-inter text-lg font-semibold text-[#181818]">Budget</p>
                                    </div>
                                    <input className="p-3 block w-full bg-blue-50 rounded-md mt-3" type="number" name="budget"{...register("budget", { required: true })} />
                                    {errors.budget && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full py-2 flex justify-center mt-8 rounded-md items-center gap-1 text-white font-poppins bg-[#0059b1] hover:bg-blue-400 duration-200"><IoSearch className="text-xl" /> Find Property</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>

                </div>
                <div className="px-5">
                    <Counter />
                </div>
                <div>
                    <PopularProperties />
                </div>
                <div>
                    <NewListed />
                </div>
                <div className="mt-10">
                    <Testimonials />
                </div>
            </div>
            <div className='w-full bg-[#FDF0E7] py-12'>
                <div className='container mx-auto px-5 flex justify-between flex-wrap gap-5'>
                    <div>
                        <h4 className='text-xl font-semibold text-[#101828]'>Post your property for free</h4>
                        <p className='text-[#475467] font-poppins pt-2'>List it on your property and get genuine leads</p>
                    </div>
                    <div>
                        <button className='bg-[#F06224] px-[28px] py-[14px] font-inter text-lg text-white flex hover:bg-red-700 duration-200 justify-center items-center rounded-lg'>Post Property</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Buy;