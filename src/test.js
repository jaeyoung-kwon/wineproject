import React, { useEffect, useState } from 'react';

const Test = () => {
  const [todo, setTodo] = useState([]);
  useEffect(()=> {
    fetch('/api').then(response => {
      if(response.ok) {
        return response.json()
      }
    }).then(data => console.log(data))
  },[])
  return(
    <>

    </>
  );
}

export default Test;
