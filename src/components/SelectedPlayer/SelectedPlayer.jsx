import Splayer from "./Splayer";
import PropTypes from "prop-types";

const SelectedPlayer = ({seletplayer}) => {
   
   console.log(seletplayer);
    return (
        <div>
            {
               seletplayer.map(seletedSplayer=> 
               <Splayer seletedSplayer={seletedSplayer} key={seletedSplayer.playerId}>

               </Splayer>) 
              
            }
             <button className=" btn btn-primary">Add More Player</button>
             
            
            
            
            
        </div>
    );
};
SelectedPlayer.propTypes ={
    seletplayer: PropTypes.array,

}
export default SelectedPlayer;