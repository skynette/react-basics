import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return <>
  <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' name='username'  />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' name='email'  />
      </div>
      <button className='btn' type='submit'>Add person</button>
    </form>
  </article>
  </>;
};

export default ControlledInputs;
