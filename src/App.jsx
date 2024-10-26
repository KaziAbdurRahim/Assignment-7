import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import Banner from './components/Header/Banner/Banner'
import Footer from './components/Footer/Footer'
import Players from './components/Players/Players'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { useState } from 'react'
import Sub from './components/Subscribe/Sub'



function App() {
  const [seletplayer, setSelectPlayer] = useState([]);
  const [selectedplyer, setSelectedplayer]=useState(0);

  const [availableBalance,setAvaiablebalance]=useState(0);

  const [coins,setcoins]=useState(0);

  const handleAddsesectedPlayer =(player)  =>{
    const newSelectedPlayer = [...seletplayer,player];
    setSelectPlayer(newSelectedPlayer);

    // const remainingPlayer = newSelectedPlayer.filter()

    
  }
  const remainingPlayer = (id)=>{
    const kk=seletplayer.filter(p=> p.playerId !==id);
    setSelectPlayer(kk);
    setSelectedplayer(selectedplyer -1 );

    const kp=seletplayer.find(p=> p.playerId ==id);
    setAvaiablebalance(availableBalance+kp.biddingPrice);

    const ss = document.getElementById(kp.playerId );
    if (ss) {
      ss.disabled =false;
      ss.innerText=`Choose player`;
      alert("the player is deleting ");
    
  }


  }

  const handlenumberofSplayer= x =>{
    setSelectedplayer(selectedplyer +x );
  // console.log( "iuhh");
  // console.log( selectedplyer);
}

  const handlesetCoin = (coin)=>{
    setcoins(coin);
    setAvaiablebalance(availableBalance-coin);
    
  }

  const avBalance = balance=>{
    setAvaiablebalance(availableBalance+balance);

  }
  const remaincoins =coin=>{
    
    console.log('');
  }

  const handleVisible=()=>{
      const vv = document.getElementById('SelectedPlayer');
      const fk =document.getElementById('Players');
      const ba =document.getElementById('Avaiable');
     const bs =document.getElementById('se');
     vv.classList.add('hidden');
     fk.classList.remove('hidden');
     ba.classList.remove('bg-slate-900');
   bs.classList.add('bg-slate-900');
    



  }
  const shandleVisible=()=>{
    const vv = document.getElementById('SelectedPlayer');
     const fk =document.getElementById('Players');
     const ba =document.getElementById('Avaiable');
     const bs =document.getElementById('se');
     fk.classList.add('hidden');
     vv.classList.remove('hidden');
     ba.classList.add('bg-slate-900');
     bs.classList.remove('bg-slate-900');
    // bs.classList.remove('');



  }


  
  
  

  return (
    <>
   
    <Navbar availableBalance={availableBalance}></Navbar>
    <Banner avBalance={avBalance}></Banner> 
    
    <div className='container mx-auto'>
      <div className='flex justify-between items-center my-3'>
        <h3 className='text-center pl-2 text-xl font-semibold' >Available Player</h3>
        <div  className='join'>
          <button id='Avaiable' className='btn btn-primary  join-item' onClick={
            handleVisible
          }>Available</button>
          <button className='btn btn-primary join-item bg-slate-900' id='se' onClick={shandleVisible}>Selected({selectedplyer}/6)</button>
        </div>
      </div>
      
      <div>
      <Players handleAddsesectedPlayer={handleAddsesectedPlayer} handlenumberofSplayer={handlenumberofSplayer}
       handlesetCoin={handlesetCoin}
       remaincoins={remaincoins}></Players>
      </div>
      <div>
        <SelectedPlayer seletplayer={seletplayer}  remainingPlayer={ remainingPlayer}  handleVisible={ handleVisible}></SelectedPlayer>
      </div>
    </div>

    <Sub></Sub>
    <Footer></Footer>
    
    </>
  )
}

export default App
