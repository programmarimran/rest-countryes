import React, { use, useState} from 'react';
import Country from './country/country';
import SelectedCountry from './selectedCountry/selectedCountry';

const Countryes = ({promise}) => {
    const countryes=use(promise)
    const [selectedCountry,setselectedCountry]=useState([])
    const handleClick=(country)=>{
      const newselectedCountry=[...selectedCountry,country]
      setselectedCountry(newselectedCountry)
    }
    // console.log(selectedCountry)
  
    return (
        <div>
            <h1 className='text-center m-4'>Countryes : {countryes.length}</h1>
            <h1 className='text-center m-4'>Selected Country: </h1>
         <div className='flex flex-wrap gap-8 h-full justify-center m-8 border-amber-400 border border-4 rounded-2xl p-8'>
         {
            selectedCountry.map(country=><SelectedCountry country={country} key={country.flags.png}></SelectedCountry>)
          }
         </div>
          <div className='flex flex-wrap gap-8 h-full justify-center border-amber-600 border border-4 rounded-2xl p-8 m-8'> 
          {
                countryes.map(country=><Country 
                    country={country} 
                    handleClick={handleClick}
                    key={country.flags.png}></Country>)
            }
          </div>
        </div>
    );
};

export default Countryes;