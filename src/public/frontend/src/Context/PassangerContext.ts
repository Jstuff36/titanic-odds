import React from 'react';
import { Passenger } from "../Components/AddPassangers/Models";

export interface PassengerContextType {
    passengers: Passenger[];
    updatePassengers: (passangers: Passenger[]) => void;
}

export const defaultPassengerContextValue: PassengerContextType = {
    passengers: [],
    updatePassengers: () => null
}

const PassengerContext = React.createContext<PassengerContextType>(defaultPassengerContextValue);

export const PassengerProvider = PassengerContext.Provider;

export default PassengerContext;