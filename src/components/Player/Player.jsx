import PropTypes, { func } from 'prop-types'; // ES6
import { CgProfile } from "react-icons/cg";
import { IoIosFlag } from "react-icons/io";

 import { toast } from 'react-toastify';

import kk from '../../assets/pexels-case-originals-3628912.jpg'

const Player = ({ player,handleAddsesectedPlayer,handlenumberofSplayer,handlesetCoin,remaincoins }) => {
    const { name,country,role,battingType,bowlingType,biddingPrice,playerId, } = player;

   
    const notify = () => toast("the player is going to be chosen!");


    const disabled = () => {
        const bus = document.getElementById(playerId);
        if (bus) {
            //  notify();
            bus.disabled = true;
            bus.innerText=`Chosen`;
            
          
        }
    };
    return (
        <div>
            <div className="card bg-base-100  shadow-xl border ">
                <figure className="px-5 pt-5">
                    
                    <img
                        src={kk}
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
                        remaincoins(biddingPrice);
                        disabled();
                          notify();

                         }
                         } className="btn btn-primary" id={playerId}>
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
    remaincoins:PropTypes.func,
    disabled :PropTypes.func

}

export default Player;