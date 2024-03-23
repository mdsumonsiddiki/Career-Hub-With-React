import headerBanner from '../../assets/user.png'
import MainBtn from '../others/MainBtn';
const HeaderBanner = () => {
    return (
        <div className='bg-[#E8E8E8]'>
            <div className="container mx-auto">
                <div className=" flex justify-between flex-row-reverse  pt-36">
                    <div className=''>
                        <img src={headerBanner} />
                    </div>
                    <div className='w-1/3 pt-32'>
                        <h1 className="text-[#1A1919] text-7xl font-extrabold">One Step Closer To Your <br /> <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>Dream Job</span></h1>
                        <p className="py-10 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <MainBtn btnName='Get Started'></MainBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;