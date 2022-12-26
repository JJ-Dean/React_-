import React, { useState } from 'react';

const InputForm = (props) => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputAgeValue, setInputAgeValue] = useState('');

  const inputNameHandler = (event) => {
    setInputNameValue(event.target.value);
  };
  const inputAgeHandler = (event) => {
    setInputAgeValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredItem = { name: inputNameValue, age: inputAgeValue };
    props.onAddItem(enteredItem);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h2>이름</h2>
      <input value={inputNameValue} onChange={inputNameHandler} type="text" />
      <h2>나이</h2>
      <input value={inputAgeValue} onChange={inputAgeHandler} type="text" />
      <button type="submit">유저 추가</button>
    </form>
  );
};

export default InputForm;
