import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email) {
      const person = { username, email }
      setPeople((people) => {
        return [...people, person]
      })
      setUsername('')
      setEmail('')
      console.log(person);
      console.log(people)
    }
    else {
      console.log('Please enter a username and email')
    }
  }
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
        </div>
        <button className='btn' type='submit'>Add person</button>
      </form>
      {people.map((person) => {
        const { id, username, email } = person
        return <div className='item' key={id}>
          <h4>{username}</h4>
          <p>{email}</p>
        </div>
      }
      )}
    </article>
  </>;
};

export default ControlledInputs;
