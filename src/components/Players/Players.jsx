import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";




const Players = ({handleAddsesectedPlayer,handlenumberofSplayer,handlesetCoin,remaincoins}) => {
    const [players, setPlayers] = useState([])
    useEffect( () =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))

    },[])
    return (
    
        <div className="container mx-auto my-2" id="Players">
            <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-2">
            
            {
                players.map(player => <Player key={player.playerId} player={player} handleAddsesectedPlayer={handleAddsesectedPlayer} handlenumberofSplayer={handlenumberofSplayer}
                    handlesetCoin={handlesetCoin}
                    remaincoins={remaincoins}></Player>)
            }
            
            
        </div>
        </div>
    );
};

Players.proType = {
    handleAddsesectedPlayer:  PropTypes.func,
    handlenumberofSplayer: PropTypes.func,
    handlesetCoin:PropTypes.func,
    remaincoins:PropTypes.func
    
}
export default Players;