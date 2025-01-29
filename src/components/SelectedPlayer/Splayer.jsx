import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
 import { toast } from "react-toastify";

 import
 zz from '../../assets/pexels-case-originals-3628912.jpg'
const Splayer = ({seletedSplayer,remainingPlayer}) => {
  const {name,battingType,playerId}=seletedSplayer;

   const notify = () => toast("The player is going to be deleted!");
  
    return (
        <div  className="">
            <div className="flex justify-between p-3 my-2 border-2 rounded-md items-center">
                <div className="flex items-center  ">
                    <div className="w-12 mr-2">{seletedSplayer.length}
                        
                        <img src={zz} alt=""  className="rounded-[50%] border-2 overflow-hidden object-cover "/>

                    </div>
                    <div className="items-center space-y-1">
                        <p className="font-semibold text-lg">{name}</p>
                        <p className="text-sm ">{battingType}</p>
                    </div>
                </div>
                <div>
                <button
            onClick={() =>{ remainingPlayer(playerId);
                notify();
            }}
            className="text-red-500"
          >
            <RiDeleteBin6Line />
          </button>
                    </div>
            </div>
           
            
        </div>
    );
};
Splayer.propTypes={
    seletedSplayer: PropTypes.object,
    remainingPlayer: PropTypes.func.isRequired,



}
export default Splayer;