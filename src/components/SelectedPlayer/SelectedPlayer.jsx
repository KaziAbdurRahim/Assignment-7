import Splayer from "./Splayer";
import PropTypes from "prop-types";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SelectedPlayer = ({seletplayer,remainingPlayer, handleVisible}) => {
   
  
    return (
        <div className="hidden" id="SelectedPlayer">
            {
               seletplayer.map(seletedSplayer=> 
               <Splayer seletedSplayer={seletedSplayer} key={seletedSplayer.playerId} remainingPlayer={remainingPlayer}>

               </Splayer>) 
              
            }
             <button className=" btn btn-primary" onClick={ handleVisible}>Add More Player</button>
             
            
            
             <ToastContainer></ToastContainer>  
            
        </div>
    );
};
SelectedPlayer.propTypes ={
    seletplayer: PropTypes.array,
    remainingPlayer:PropTypes.func,
    handleVisible:PropTypes.func

}
export default SelectedPlayer;