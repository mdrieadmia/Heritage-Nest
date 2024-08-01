import { GrLocation } from "react-icons/gr";
import Overview from "../../components/Overview/Overview";
import Amenities from "../../components/Amenities/Amenities";
import Services from "../../components/Services/Services";
import NearbyProperties from "../../components/NearbyProperties/NearbyProperties";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../authentication/AuthProvider";
import toast from "react-hot-toast";

const PropertyDetails = () => {
    const [minPrice, setMinPrice] = useState(20);
    const [maxPrice, setMaxPrice] = useState(80);
    const [bidLoading, setBidLoading] = useState(false)
    const { id } = useParams()
    const { user, userData } = useContext(AuthContext)

    const { data: property = {}, isLoading } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const data = axios.get(`https://heritagenest-tau.vercel.app/details/${id}`)

            return data;
        }
    })

    const { _id, name, location, price, primaryImage, minBudget, maxBudget } = property.data || {}


    useEffect(() => {
        if (minPrice > maxPrice) {
            setMinPrice(maxPrice);
        }
    }, [minPrice, maxPrice]);


    const handlePlaceBid = async () => {
        setBidLoading(true)
        const bidData = {
            userEmail: userData.email,
            userName: userData.displayName,
            propertiesId: _id,
            propertiesName: name,
            location:location,
            price: price,
            minPrice: minPrice * 5,
            maxPrice: maxPrice * 5,
            image: primaryImage,
        }
        try {
            const data = await axios.post('https://heritagenest-tau.vercel.app/bid', bidData)

            if (data.data.insertedId) {
                toast.success('Bid Placed Successfully')
                setBidLoading(false)
            }
        } catch (err) {
            toast.error('Bid Place Failed')
            setBidLoading(false)
        }
    }

    if (!user) {
        return <div className="flex flex-col items-center justify-center h-[500px] w-full">
            <h1 className="text-3xl text-center font-semibold text-red-500">You are not logged in</h1>
            <p className="text-lg font-semibold text-center mt-2">Please Signin first</p>
            <div className="flex justify-center items-center mt-5">
                <Link to={'/signin'} className="px-5 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-500 duration-200">
                    Sign In
                </Link>
            </div>
        </div>
    }

    if (isLoading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin text-3xl text-orange-600" />
        </div>
    }

    return (
        <div className="inner-shadow">
            <div className="container mx-auto px-5">
                <div className="flex gap-[20px] flex-wrap">
                    <div className="pt-[45px]">
                        <h3 className="font-inter text-xl font-semibold text-[#010101] ">{name}</h3>
                        <div className="flex items-center gap-2 mt-3">
                            <GrLocation className="text-2xl text-[#EE6611]" />
                            <p className="text-[#606060] text-lg font-inter">{location}</p>
                        </div>
                    </div>
                    <div className="pt-[45px]">
                        <p className="font-inter text-3xl font-black">${price / 1000}K</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <div>
                            <img className="w-full h-[400px] object-cover mt-[16px]" src={primaryImage} alt="" />
                            <div className="flex justify-between gap-5 mt-5 flex-wrap md:flex-nowrap">
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/house1.png" alt="" />
                                </div>
                                <div className="w-full h-[160px]">
                                    <img className="w-full h-full object-cover" src="/house2.png" alt="" />
                                </div>
                                <div className="w-full h-[160px] bg-[url('/house3.png')] bg-center bg-no-repeat bg-cover">
                                    <div className="bg-black bg-opacity-70 h-full w-full flex justify-center items-center cursor-pointer">
                                        <h4 className="text-xl font-semibold text-white">View More</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Overview data={property.data} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-span-1">
                        <div>
                            <div className="bg-[#ECF5FF] p-6 mt-4">
                                <h5 className="text-base font-poppins font-normal text-[#6b7280]">Property Value</h5>
                                <h3 className="text-2xl font-bold text-[#252323] mt-2 mb-4">${minBudget / 1000}K- ${maxBudget / 1000}K</h3>
                                <p className="text-base font-poppins font-normal text-[#6b7280] mb-8">Your bid can not be than 10% of the property minimum value.</p>
                                <p className="text-base font-poppins font-normal text-[#252323]">Min</p>
                                <div className="px-4 py-3 font-inter text-[#252323] bg-white mt-1 mb-3">
                                    ${minBudget / 1000}K
                                </div>
                                <p className="text-base font-poppins font-normal text-[#252323]">Max</p>
                                <div className="px-4 py-3 font-inter text-[#252323] bg-white mt-1 mb-3">
                                    ${maxBudget / 1000}K
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
                                            <span id="minPriceDisplay">{minPrice * 5}K</span>
                                        </div>
                                        <div className="font-inter text-[#252323] font-medium mt-1 mb-3">
                                            $
                                            <span id="maxPriceDisplay">{maxPrice * 5}K</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="mt-4 flex justify-center items-center">
                                        <div onClick={handlePlaceBid} className="w-[166px] h-[48px] flex justify-center items-center bg-[#0059B1] rounded-[4px] font-semibold text-white hover:bg-blue-400 duration-200 cursor-pointer">
                                            {
                                                bidLoading ?
                                                    <TbFidgetSpinner className='text-white animate-spin' > </TbFidgetSpinner>
                                                    :
                                                    "Bid Property"
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5">
                                <iframe className="w-full h-[422px] rounded-lg" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7346.632742261693!2d-76.58204589429764!3d36.72718979452074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1722515789334!5m2!1sen!2sbd"></iframe>
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