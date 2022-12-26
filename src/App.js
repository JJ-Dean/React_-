import React, { useState } from 'react';

import InputForm from './components/PracInput/InputForm';
import PracList from './components/PracList/PracList';

function App() {
  const [pracItems, setPracItems] = useState([
    { name: 'Max', age: 31 },
    { name: 'John', age: 27 },
  ]);

  const addItemHandler = (enteredItem) => {
    console.log(enteredItem);
    setPracItems((prevItems) => {
      const updateItem = [...prevItems];
      updateItem.unshift({ name: enteredItem.name, age: enteredItem.age });
      return updateItem;
    });
  };

  return (
    <div>
      <section id="items">
        <InputForm onAddItem={addItemHandler}></InputForm>
      </section>
      <section id="item-list">
        <PracList items={pracItems} />
      </section>
    </div>
  );
}

export default App;
