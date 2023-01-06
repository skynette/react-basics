import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Hello world');
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'
  const [isError, setIsError] = useState(false);

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    <h1>{text || "josh"}</h1>
    {isError && <h1>An Error occurred</h1>}

    <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
  </>;
};

export default ShortCircuit;
