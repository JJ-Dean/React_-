import React from 'react';

import styled from 'styled-components';

import PracItem from '../PracItem/PracItem';

const ListCom = styled.div`
  width: 100%;
  height: 100px;
`;

const PracList = (props) => {
  return (
    <ListCom className="list">
      {props.items.map((item) => (
        <PracItem key={item.name} name={item.name} age={item.age}>
          {item.name} ({item.age} years old)
        </PracItem>
      ))}
    </ListCom>
  );
};

export default PracList;
