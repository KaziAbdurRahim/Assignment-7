import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";



const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect( () =>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))

    },[])
    return (
    
        <div className="container mx-auto">
            <div className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-2">
            
            {
                players.map(player => <Player key={player.playerId} player={player}></Player>)
            }
            
        </div>
        </div>
    );
};

export default Players;