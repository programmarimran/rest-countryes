import './App.css'
import CountryesPromise from './countryesPromise/countryesPromise'
import Navber from './navber/navber'

function App() {
 

  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <Navber></Navber>
     <CountryesPromise></CountryesPromise>
   
      </div>
    </>
  )
}

export default App
