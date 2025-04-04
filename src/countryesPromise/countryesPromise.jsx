import React, { Suspense } from 'react';
import Countryes from './countryes/countryes';
import { ErrorBoundary } from 'react-error-boundary';

// const countryes=fetch("https://restcountries.com/v3.1/all")
// .then(pro=>pro.json())
// console.log(countryes)

const countryes=async ()=> {
  try {
    const countrysPromise=await fetch("https://restcountries.com/v3.1/all")
    const promise=await countrysPromise.json()
    return promise 
  } catch (error) {
    console.log("erono i ",error)
  }
};
const promise=countryes()

const CountryesPromise = () => {
    return (
        <div>
         <ErrorBoundary fallback={<h1 className='text-center text-3xl flex justify-center items-center text-red-700'>some problem please refresh and wait</h1>}>
         <Suspense fallback={<h1 className='text-center text-3xl flex justify-center items-center text-green-700'> Countryes is pending......</h1>}>
                <Countryes promise={promise}></Countryes>
            </Suspense>
         </ErrorBoundary>
        </div>
    );
};

export default CountryesPromise;