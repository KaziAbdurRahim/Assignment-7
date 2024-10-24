import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import Banner from './components/Header/Banner/Banner'
import Footer from './components/Footer/Footer'
import Players from './components/Players/Players'


function App() {

  return (
    <>
   
    <Navbar></Navbar>
    <Banner></Banner> 
    
    <div className='container mx-auto'>
      <div className='flex justify-between items-center my-3'>
        <h3 className='text-center pl-2 text-xl font-semibold' >Available Player</h3>
        <div  className='join'>
          <button className='btn btn-primary  join-item'>Available</button>
          <button className='btn btn-primary join-item'>Selected</button>
        </div>
      </div>
      
      <div>
      <Players></Players>
      </div>
    </div>


    <Footer></Footer>
    
    </>
  )
}

export default App
