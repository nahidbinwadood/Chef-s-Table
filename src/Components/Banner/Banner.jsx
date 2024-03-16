import './Banner.css'
const Banner = () => {
    return (
        <div className="container mt-12 px-6 lg:px-0 mx-auto lg:mt-16">
            <div className='bg rounded-3xl'>
                <div className=" lg:p-0 lg:h-[70vh]">
                    <div className='text-center py-12 lg:py-52 px-6 space-y-8'>
                        <h1 className='text-white text-3xl lg:text-6xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className='lg:w-2/3 mx-auto text-white text-lg'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className='flex gap-6 justify-center'>
                            <button className='font-bold text-[#150B2B] px-4 py-3 lg:px-8 lg:py-4 rounded-full bg-[#0BE58A]'>Explore Now</button>
                            <button className='px-4 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-white border border-white'>Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;