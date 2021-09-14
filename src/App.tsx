import React from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Greetings from './Greetings';
import MyFrom from './MyForm';
import ReducerSample from './ReducerSample';

function App(){
  const onClick = (name:string) => {
     console.log(name);
  }
  const onSubmit = (form :{name:string; description:string}) =>{
    console.log(form);
  };
  return (
    <div>
      <Greetings name="리엑트" onClick={onClick} />
      <Counter></Counter>
      <Counter2></Counter2>
      <MyFrom onSubmit={onSubmit}></MyFrom>
      <ReducerSample></ReducerSample>
    </div>
  );
}

export default App;
