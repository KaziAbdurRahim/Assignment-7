import PropTypes, { func } from 'prop-types'; // ES6
import { CgProfile } from "react-icons/cg";
import { IoIosFlag } from "react-icons/io";


const Player = ({ player,handleAddsesectedPlayer,handlenumberofSplayer,handlesetCoin }) => {
    const { name,country,role,battingType,bowlingType,biddingPrice } = player;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl border ">
                <figure className="px-5 pt-5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title flex items-center gap-2"><CgProfile />{name}</h2>
                    <div className='flex justify-between '>
                        <div className='flex justify-between items-center'>
                        <p className='flex items-center gap-2' > <IoIosFlag />{country}</p>
                        </div>
                        <div><p className='bg-base-200 p-2 rounded-lg
                        '>{role}</p></div>
                    </div>
                    <hr />
                    <div className='flex justify-between '>
                        <div className='space-y-2 font-semibold'>
                            <h3>Rating</h3>
                            <p>{battingType}</p>
                            <p>Price:${biddingPrice}</p>
                            
                        </div>
                        <div className=' text-right space-y-2'>
                            <br />
                        <p>{bowlingType}</p>
                        <div className="card-actions  float-right">
                            
                        <button onClick={() => { handlenumberofSplayer(1); handleAddsesectedPlayer(player);
                        handlesetCoin(biddingPrice);
                         }
                         } className="btn btn-primary">
  choose player
</button>

                    </div>
                        </div>
                    </div>
                  
                    
                </div>
            </div>

        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddsesectedPlayer: PropTypes.func,
    handlenumberofSplayer: PropTypes.func,
    handlesetCoin:PropTypes.func,
    remaincoins:PropTypes.func

}

export default Player;