import React, { useState, useEffect } from 'react'
import '../App.css'

const useEffectConcept = () => {
  let [list, setList] = useState([{ title: 'null' }, { title: 'null' }]);
  let [count, setCount] = useState(0);
  function fun() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setList(data)
        console.log(data);
      })
  }
  useEffect(fun, []);
  function add() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className="App">
      <div onClick={add}>{list[count].title}</div>
      <div onClick={add}>{list[count].title}</div>
      <button onClick={fun}>click me</button>

    </div >
  );
}

export default useEffectConcept

