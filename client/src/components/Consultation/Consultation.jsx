
const Consultation = () => {
    return (
        <div className="my-[64px] flex justify-between">
            <div>
                <div className="flex gap-2 items-center">
                    <div className="h-[4px] w-16 bg-[#F06711]"></div>
                    <p className="font-inter text-lg font-semibold text-[#F06711]">Meet the Team For Book Consultation</p>
                </div>
                <h2 className='text-[40px] font-bold text-[#1f2937] leading-[48px] mt-4 max-w-[640px]'>Meet the stewards of your haritage journey</h2>
                <p className="max-w-[690px] text-[#6b7280] font-poppins font-medium leading-6 mt-6">Each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.</p>
                <div>
                    <button className="px-6 py-4 bg-[#0059B1] hover:bg-blue-600 duration-200 hover:scale-105 text-lg font-semibold mt-[48px] text-white">Book Consultation Now</button>
                </div>
            </div>
            <div>
                <img className="w-[384px] h-[304px] object-cover" src="/about3.avif" alt="About Image" />
            </div>
        </div>
    );
};

export default Consultation;