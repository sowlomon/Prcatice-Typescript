import {FC, useState} from 'react';


export enum Cars {
  honda = "i love honda cars",
  toyota = "i hate toyota car brands",
  lamboghini = "i have got two lambos"
}

export interface Props {
  firstName : string,
  lastName : string,
  email: string,
  age : number,
  cars : Cars

}


 export const  Person : FC<Props> = ({email,firstName,lastName,age , cars}) => {


  const [count , setCount] = useState<number | string>("hello")

  const addNum = () => {
  setCount("my name is solomon")

  }

  return (
    <div>
      <h1>{firstName } {lastName}</h1>
      <br/>
      {age}
      <br/>
      {email}
      <br/>

      <button onClick={addNum}>LIKE : {count} HELLO</button>
      <br/>
      <h1>{cars}</h1>
    </div>
  );
}

