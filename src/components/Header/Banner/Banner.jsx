import banner_img from '../../../assets/banner-main.png'

const Banner = () => {
    return ( 
        <div>
            <div className="hero hero-pattern ">
                <div className="hero-content  text-center">
                   
                   
                    <div className="border   ">
                       <img src={banner_img } alt="" className='  mx-auto '/>
                        <h1 className="text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="py-6">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-red-500 to-yellow-600">Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;