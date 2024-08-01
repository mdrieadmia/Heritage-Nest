import { BsImage } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const PropertiesCard = (data) => {
    console.log(data);
    return (
        <div>
            <Link to={`/details/${data.data._id}`}>
                <div className='w-full rounded-lg border mb-10 hover:shadow-md duration-200 hover:scale-[1.01]'>
                    <div className='w-full relative'>
                        <img className='w-full h-[200px] rounded-t-md object-cover' src={data.data.primaryImage} alt="" />
                        <div className='px-2 py-1 text-lg absolute bottom-4 left-4 bg-white rounded-md flex justify-center gap-2 items-center'>
                            <BsImage className='text-[#EE6611]' />
                            <p className='font-semibold text-black'>20</p>
                        </div>
                    </div>
                    <div className='p-6'>
                        <div className='flex justify-between items-center mb-3 flex-wrap gap-3'>
                            <div className='bg-[#C5E2FF] px-2 py-1 font-poppins text-sm text-[#00254a] inline-block rounded-md'>
                                <p>{data.data.type}</p>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='h-3 w-3 bg-[#EE6611] rounded-sm'></div>
                                <p className='font-poppins text-gray-900 font-medium'>Ready to Move</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4 className='font-semibold text-xl text-[#111827] mt-2'>{data.data.name}</h4>
                            <div className='flex gap-1 mt-1 items-center'>
                                <GrLocation className='text-xl text-[#EE6611]' />
                                <p className='font-poppins text-[#6b7280]'>{data.data.location}</p>
                            </div>
                            <h3 className='text-2xl font-semibold text-[#111827] mt-6'>${data.data.price}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertiesCard;