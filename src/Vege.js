import React, { useEffect } from 'react';

const Vege = React.memo(({ 
  vege, 
  setVege 
}) => {
  const handleClick = () => {
    setVege('Broccoli');
  }

  useEffect(() => {
    console.log(`Got new ${vege} and RENDERED!`);
  });

  return (
    <>
      <h2>Today's vegetable is {vege}</h2>
      <button onClick={handleClick}>Set Vege to Broccoli</button>
    </>
  );
});

export default Vege;