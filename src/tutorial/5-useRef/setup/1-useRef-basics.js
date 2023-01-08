import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handlesubmit = (event) =>{
    event.preventDefault();
    console.log(refContainer.current.value);
  }
  console.log(refContainer);
  return <>
    <form className='form' onSubmit={handlesubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button type='submit'>submit</button>
      </div>
    </form>
  </>
};

export default UseRefBasics;
