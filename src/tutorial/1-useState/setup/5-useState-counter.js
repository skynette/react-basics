import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }
  const complexIncrease = () => {
    setTimeout(()=>{
      // setValue(value + 1)
      // here prevStateVal is exactly the value in the previous state 
      setValue((prevStateVal)=>{
        return prevStateVal + 1
      })
    }, 2000)
  }
  return <>
    <h2>useState counter example</h2>
    
    <div style={{ margin: '4rem 0' }}>
      <h2>Regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={(() => setValue(value - 1))} >Decrease</button>
      <button className='btn' onClick={(() => setValue(value + 1))}>Increase</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
    
    <div style={{ margin: '4rem 0' }}>
      <h2>More complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>
      </div>
  </>
};

export default UseStateCounter;
