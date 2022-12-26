import React, { useState } from 'react';

import InputForm from './components/PracInput/InputForm';

function App() {
  const [pracItems, setPracItems] = useState([
    { name: 'Max', age: 31 },
    { name: 'John', age: 27 },
  ]);

  const addItemHandler = (enteredItem) => {
    console.log(enteredItem);
  };

  return (
    <div>
      <InputForm onAddItem={addItemHandler}></InputForm>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
