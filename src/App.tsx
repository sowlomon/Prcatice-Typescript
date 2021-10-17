import React, {FC} from 'react';
import './App.css';
import {Person , Cars} from './components/Person';





const name:string = "SOLOMON "

const addNum =  (name : string): string|number => {
  if(name === "pedro"){
    return 20
  }else{
    return "Name not equal to pedro"
  }
}
 const App:FC = () => {


  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{addNum("Godwin")}</h1>

      <Person firstName="SOLOMON" email="solomonadache@gmail.com" lastName="ADACHE" age= {40} cars = {Cars.toyota}/>
    </div>
  );
}

export default App;
