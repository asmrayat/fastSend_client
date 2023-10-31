import bannerImg from '../../../assets/top banner logo.png';
//ea5a53
const Banner = () => {
    return (
        <div>
            <div className='flex items-center flex-col w-full lg:flex-row lg:mt-16'>
                <div  className='w-3/4 mt-9 lg:mt-10'>
                    <h1 data-aos="fade-left" data-aos-duration="2000" className='text-4xl text-center'>Number <span className='font-bold text-[#ea5a53]'>one</span> delivery service </h1>
                    <h1 data-aos="fade-right" data-aos-duration="2000" className='text-center text-4xl lg:text-5xl font-bold lg:text-end lg:mr-20'>In the <span className='text-[#ea5a53]'>country</span></h1>
                </div>
                <div className='lg:w-1/2'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;