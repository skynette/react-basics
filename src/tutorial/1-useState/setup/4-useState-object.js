import React, { useState } from 'react';

const UseStateObject = () => {
  const obj = { name: "peter", age: 22, message: "some message" }
  const [person, setPerson] = React.useState(obj)

  const changeMessage = () => {
    setPerson({...person, message: "new message changed"})
  }
  return <div>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change message</button>
  </div>
};

export default UseStateObject;
