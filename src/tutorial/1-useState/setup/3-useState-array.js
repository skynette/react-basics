import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  
  const deleteItem = () =>{
    setPeople([])
  }

  const deleteMe = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  
  const [people, setPeople] = useState(data)
  return <>
  {
    people.map((person) => {
      const {id, name} = person
      return <div key={id} className="item">
        <h4>{name}</h4>
        <button className='btn' onClick={() => deleteMe(id)}>Delete me</button>
      </div>
    })
  }
  <button className='btn' onClick={deleteItem}>Delete</button>
  </>
};

export default UseStateArray;
