import Splayer from "./Splayer";
import PropTypes from "prop-types";

const SelectedPlayer = ({seletplayer,remainingPlayer, handleVisible}) => {
   
   console.log(seletplayer);
   console.log('seletplayer');
    return (
        <div className="hidden" id="SelectedPlayer">
            {
               seletplayer.map(seletedSplayer=> 
               <Splayer seletedSplayer={seletedSplayer} key={seletedSplayer.playerId} remainingPlayer={remainingPlayer}>

               </Splayer>) 
              
            }
             <button className=" btn btn-primary" onClick={ handleVisible}>Add More Player</button>
             
            
            
            
            
        </div>
    );
};
SelectedPlayer.propTypes ={
    seletplayer: PropTypes.array,
    remainingPlayer:PropTypes.func,
    handleVisible:PropTypes.func

}
export default SelectedPlayer;