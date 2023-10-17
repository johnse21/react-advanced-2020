import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(()=>{
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 1500);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={() => setValue(value--)}>
          Decrease
        </button>

        <button className='btn' onClick={reset}>
          Reset
        </button>

        <button className='btn'  onClick={() => setValue(value++)}>
          Increase
        </button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>complex counter</h2>
        <h1>{value}</h1>

        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
