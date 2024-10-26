import PropTypes from 'prop-types'
import banner_img from '../../../assets/banner-main.png'
import bgImage from '../../../assets/bg-shadow.png'

const Banner = ({avBalance}) => {
    return ( 
        <div className='bg-black container mx-auto rounded-2xl'>
            <div className="hero hero-pattern rounded-2xl" style={{ backgroundImage: `url(${ bgImage})`, backgroundSize: 'cover',  }}>
                <div className="hero-content  text-center z-20">
                   
                   
                    <div className="   ">
                       <img src={banner_img } alt="" className='  mx-auto '/>
                        <h1 className="text-5xl font-bold text-white ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="py-6 text-base-300">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-red-500 to-yellow-600" onClick={()=>avBalance(20000000)}>Claim Free Credit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
Banner.propTypes ={
    avBalance:PropTypes.func
}

export default Banner;