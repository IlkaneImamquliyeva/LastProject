import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import cardhomedata from '../data/cardhomedata';

export const CardHomeContext = createContext();

export const CardHomeProvider = props => {
    const [cardhomes,setCardHome] = useState(cardhomedata);
  return (
    <CardHomeContext.Provider value={[cardhomes,setCardHome]}>
        {props.children}
    </CardHomeContext.Provider>
  )
}

