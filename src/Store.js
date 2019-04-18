import React, { useState } from 'react';

export const FruitContext = React.createContext('Apple');
export const VegeContext = React.createContext('Tomato');
export const CoffeeContext = React.createContext('Latte');

const Store = ({ children }) => {
  const [fruit, setFruit] = useState('Apple');
  const [vege, setVege] = useState('Tomato');
  const [coffee, setCoffee] = useState('Latte');

  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegeContext.Provider value={[vege, setVege]}>
        <CoffeeContext.Provider value={[coffee, setCoffee]}>
          {children}
        </CoffeeContext.Provider>
      </VegeContext.Provider>
    </FruitContext.Provider>
  );
}

export default Store;