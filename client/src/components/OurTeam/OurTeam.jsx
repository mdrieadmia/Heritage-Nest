
const OurTeam = () => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <div className="h-[4px] w-16 bg-[#F06711]"></div>
                <p className="font-inter text-lg font-semibold text-[#F06711]">Our Team</p>
            </div>
            <h2 className='text-[40px] font-bold font-inter text-[#1f2937] leading-[48px] mt-4'>Discover the Faces Behind Our Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-[64px]">
                <div>
                    <img src="/person1.png" className="w-full" alt="Person 1" />
                </div>
                <div>
                    <img src="/person2.png" className="w-full" alt="Person 2" />
                </div>
                <div>
                    <img src="/person3.png" className="w-full" alt="Person 3" />
                </div>
            </div>
        </div>
    );
};

export default OurTeam;