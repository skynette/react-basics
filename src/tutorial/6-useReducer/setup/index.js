import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}
const Index = () => {

  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    }
    else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Add person</button>
      </div>
    </form>
    <div>
      {state.people?.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button type='submit' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: person.id })}>Remove</button>
          </div>
        )
      })}
    </div>
  </>
};

export default Index;
