import React, { useContext } from 'react';
import { FruitContext, VegeContext, CoffeeContext } from './Store';
import Fruit from './Fruit';
import Vege from './Vege';
import Coffee from './Coffee';

const App = () => {
  const [fruit] = useContext(FruitContext);
  const [vege, setVege] = useContext(VegeContext);
  const [coffee, setCoffee] = useContext(CoffeeContext);

  return (
    <div className="App">
      <h1>React Hooks in Context</h1>
      <Fruit fruit={fruit} />
      <Vege
        vege={vege}
        setVege={setVege}
      />
      <Coffee
        coffee={coffee}
        setCoffee={setCoffee}
      />
    </div>
  );
};

export default App;