import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    // clean up func
    // return ()=>{
    //   console.log("cleanup")
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])
  return <>
    <h2>useEffect cleanup</h2>
    <h1>window</h1>
    <h2>{size}px</h2>
  </>
};

export default UseEffectCleanup;
