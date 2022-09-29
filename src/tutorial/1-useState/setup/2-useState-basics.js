import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);
  const [text, setText] = useState("Random Default Value")

  const handleClick = () => {
    setText("Hello New Text")
  }

  return <div>
    <h1>{ text }</h1>
    <button className='btn' onClick={handleClick}>Change title</button>
  </div>
};

export default UseStateBasics;
