import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const clearItems = () => {
    setPeople([]);
  }

  const removeItem = (id) => {
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  }

  return (
    <>
      {
        people.map((person) => {
          const {id, name} = person;
          return( 
            <div key={id} className='item'>
              <h4>{name}</h4>

              <button className='btn' onClick={() => removeItem(id)}>
                Remove
              </button>
            </div>
          );
        })
      }
      <button className='btn' onClick={clearItems}>
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
