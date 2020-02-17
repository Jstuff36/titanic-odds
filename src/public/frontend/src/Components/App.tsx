import React, { useState, useCallback, useEffect, useMemo } from 'react';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import LandingPage from './LandingPage/LandingPage';
import { fetchPassengers } from '../ApiCall';
import { PassengerContextType, PassengerProvider } from '../Context/PassengerContext';
import { Passenger } from './AddPassengers/Models';

const App = () => {

  const [passengers, setPassengers] = useState<Passenger[]>([]);

  const fetchInitialPassengers = useCallback(() => fetchPassengers(setPassengers), []);

  useEffect(() => {
    fetchInitialPassengers();
  }, [fetchInitialPassengers, setPassengers])

  const passengerContextValue: PassengerContextType = useMemo(() => (
    {
      passengers,
      updatePassengers: setPassengers
    }
  ), [passengers, setPassengers]);

  return (
    <div>
      <PassengerProvider value={passengerContextValue}>
        <HeaderContainer />
        <LandingPage />
      </PassengerProvider>
    </div>
  );
}

export default App;
