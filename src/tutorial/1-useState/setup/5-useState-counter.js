import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value--);
  };

  const reset = () => {
    setValue(0);
  };

  const increase = () => {
    setValue(value++);
  };

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={decrease}>
          Decrease
        </button>

        <button className='btn' onClick={reset}>
          Reset
        </button>

        <button className='btn'  onClick={increase}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
