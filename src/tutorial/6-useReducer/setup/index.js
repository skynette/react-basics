import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) =>{

}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world'
}
const Index = () => {
  
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name){
      
    }
    else{
    
    }
  }
  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Add person</button>
      </div>
    </form>
    <div>
      {state.people?.map((person) =>{
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        )
      })}
      {!people && <h4>No Record Available</h4>}
    </div>
  </>
};

export default Index;
