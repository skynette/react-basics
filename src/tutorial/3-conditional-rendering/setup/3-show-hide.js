import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>
    <button className='btn' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    {show && <Item />}
  </>;
};

export default ShowHide;

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', checkSize)
  }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>Size: {size}px</h2>
    </div>
  )
}