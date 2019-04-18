import React, { useEffect } from 'react';

const Fruit = React.memo(({ fruit }) => {

  useEffect(() => {
    console.log(`Got new ${fruit} and RENDERED!`);
  });

  return <h2>Today's vegetable is {fruit}</h2>;
});

export default Fruit;