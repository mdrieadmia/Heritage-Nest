import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import { Link } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageRentalsTable from "../../components/ManageRentalsTable/ManageRentalsTable";

const ManageRentals = () => {
    const { user, userData, isLoading } = useContext(AuthContext)

    const {data:bids=[], isLoading:isBidLoading, refetch} = useQuery({
        queryKey:['bids'],
        queryFn: async()=>{
            const data = await axios.get(`https://heritagenest-tau.vercel.app/bids/${userData.email}`)
            return data.data;
        }
    })


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

    if (isLoading || isBidLoading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <TbFidgetSpinner className="animate-spin text-3xl text-orange-600" />
        </div>
    }

    return (
        <div className="container mx-auto px-5 pt-5 mb-16">
            <h1 className="text-3xl font-semibold">Welcome Back!
                {
                    userData && <span className="text-3xl font-semibold my-1 text-[#0059B1]"> {userData.displayName}</span>
                }
            </h1>
            <p className="text-xl font-bold text-center mt-5">Your Previous Bid List</p>
            <div>
                <ManageRentalsTable data={bids} refetch={refetch}/>
            </div>
            <div>
                {
                    bids.length < 1 && <div>
                        <h4 className="text-center">Please place your bid first</h4>
                        <div className="flex justify-center items-center mt-5">
                            <Link to={'/buy'} className="px-8 py-2 bg-blue-400 hover:bg-blue-600 text-white rounded-lg duration-100"> See Properties</Link>
                        </div>
                    </div> 
                }
            </div>
        </div>
    );
};

export default ManageRentals;