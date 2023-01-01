import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsosn';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        }
        else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((response) => {
        setUser(response.login)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, []);


  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error Occurred...</h1>
      </div>
    )
  }
  return <div>
    <h1>{user}</h1>
  </div>;
};

export default MultipleReturns;
