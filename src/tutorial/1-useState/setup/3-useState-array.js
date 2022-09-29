import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const deleteItem = () =>{
    setPeople([])
  }
  const [people, setPeople] = useState(data)
  return <>
  {
    people.map((person) => {
      const {id, name} = person
      return <div key={id} className="item">
        <h4>{name}</h4>
      </div>
    })
  }
  <button className='btn' onClick={deleteItem}>Delete</button>
  </>
};

export default UseStateArray;
