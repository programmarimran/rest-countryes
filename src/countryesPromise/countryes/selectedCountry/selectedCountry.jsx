import React from 'react';

const SelectedCountry = ({country}) => {
    // console.log(country)
    const {flags,name}=country
    return (
        <div>
            <div className='border border-4 border-green-500 rounded-2xl h-full flex flex-col justify-between gap-8 p-4'>
                <img className='mx-auto rounded-2xl' src={flags.png} alt="" />
                <button className='text-center text-2xl btn bg-green-700 rounded-full hover:border-white'>{name.common}</button>
           </div>
        </div>
    );
};

export default SelectedCountry;