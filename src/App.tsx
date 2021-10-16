import React from 'react';
import './App.css';



const name:string = "SOLOMON "

const addNum =  (name : string): string|number => {
  if(name === "pedro"){
    return 20
  }else{
    return "Name not equal to pedro"
  }
}
function App() {


  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{addNum("Godwin")}</h1>
    </div>
  );
}

export default App;
