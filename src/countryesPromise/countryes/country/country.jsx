import React from 'react';
import { getId, setId } from '../../../utilities/localStorage';


const setname =()=>{
    setId(["imran","hasan"])
}
setname()
console.log(getId())



const Country = ({country,handleClick}) => {
    // console.log(country)
    const {flags,name}=country
    return (
        <div>
           <div className='border border-4 border-green-500 rounded-2xl h-full flex flex-col justify-between gap-8 p-4'>
                <img className='mx-auto rounded-2xl' src={flags.png} alt="" />
                <button onClick={()=>{handleClick(country)}} className='text-center text-2xl btn bg-green-700 rounded-full hover:border-white'>{name.common}</button>
           </div>
        </div>
    );
};

export default Country;