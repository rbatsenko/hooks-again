import React, { useEffect } from 'react';

const Coffee = React.memo(({
  coffee,
  setCoffee
}) => {

  const handleClick = () => {
    setCoffee('Capuccino');
  };

  useEffect(() => {
    console.log(`Got new ${coffee} and RENDERED!`);
  });

  return (
    <>
      <h2>Today's coffee is {coffee}</h2>
      <button onClick={handleClick}>Set coffee to Capuccino</button>
    </>
  );
});

export default Coffee;