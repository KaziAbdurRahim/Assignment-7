import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import Banner from './components/Header/Banner/Banner'
import Footer from './components/Footer/Footer'
import Players from './components/Players/Players'
import SelectedPlayer from './components/SelectedPlayer/SelectedPlayer'
import { useState } from 'react'



function App() {
  const [seletplayer, setSelectPlayer] = useState([]);
  const [selectedplyer, setSelectedplayer]=useState(0);

  const [availableBalance,setAvaiablebalance]=useState(0);

  const [coins,setcoins]=useState(0);

  const handleAddsesectedPlayer = player =>{
    const newSelectedPlayer = [...seletplayer,player];
    setSelectPlayer(newSelectedPlayer);
  }

  const handlenumberofSplayer= x =>{
    setSelectedplayer(selectedplyer +x );
  // console.log( "iuhh");
  // console.log( selectedplyer);
}

  const handlesetCoin = coin =>{
    setcoins(coin);
    setAvaiablebalance(availableBalance-coin);
    
  }

  const avBalance = balance=>{
    setAvaiablebalance(availableBalance+balance);

  }
  const remaincoins =coin=>{
    
    console.log('afuefg');
  }


  
  
  

  return (
    <>
   
    <Navbar availableBalance={availableBalance}></Navbar>
    <Banner avBalance={avBalance}></Banner> 
    
    <div className='container mx-auto'>
      <div className='flex justify-between items-center my-3'>
        <h3 className='text-center pl-2 text-xl font-semibold' >Available Player</h3>
        <div  className='join'>
          <button className='btn btn-primary  join-item'>Available</button>
          <button className='btn btn-primary join-item'>Selected({selectedplyer}/6)</button>
        </div>
      </div>
      
      <div>
      <Players handleAddsesectedPlayer={handleAddsesectedPlayer} handlenumberofSplayer={handlenumberofSplayer}
       handlesetCoin={handlesetCoin}
       remaincoins={remaincoins}></Players>
      </div>
      <div>
        <SelectedPlayer seletplayer={seletplayer}></SelectedPlayer>
      </div>
    </div>


    <Footer></Footer>
    
    </>
  )
}

export default App
