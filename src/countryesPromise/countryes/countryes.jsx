import React, { use} from 'react';
import Country from './country/country';

const Countryes = ({promise}) => {
    const countryes=use(promise)
  
    return (
        <div>
            <h1 className='text-center m-4'>Countryes : {countryes.length}</h1>
        
          <div className='flex flex-wrap gap-8 h-full justify-center'> 
          {
                countryes.map(country=><Country 
                    country={country} 
                    
                    key={country.flags.png}></Country>)
            }
          </div>
        </div>
    );
};

export default Countryes;