import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const clearItems = () => {
    setPeople([]);
  }

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {
        people.map((person) => {
          const {id, name} = person;
          return( 
            <div key={id} className='item'>
              <h4>{name}</h4>
            </div>
          );
        })
      }
      <button className='btn' onClick={clearItems}>
        Clear items
      </button>

      <button className='btn' onClick={() => removeItem(1)}>
        Remove Item
      </button>
    </>
  );
};

export default UseStateArray;
