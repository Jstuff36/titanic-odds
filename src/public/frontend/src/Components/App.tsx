import React, { useState, useCallback, useEffect, useMemo } from 'react';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import LandingPage from './LandingPage/LandingPage';
import { fetchPassengers } from '../ApiCall';
import { PassengerContextType, PassengerProvider } from '../Context/PassengerContext';
import { Passenger } from './AddPassengers/Models';
import { LoadingContextType, LoadingProvider } from '../Context/LoadingContext';
import { Dimmer, Loader } from 'semantic-ui-react';

const App = () => {

  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchInitialPassengers = useCallback(async () => await fetchPassengers(setPassengers), []);

  useEffect(() => {
    fetchInitialPassengers();
    setLoading(false);
  }, [fetchInitialPassengers, setPassengers])

  const passengerContextValue: PassengerContextType = useMemo(() => ({
    passengers,
    updatePassengers: setPassengers
  }), [passengers, setPassengers]);

  const loadingContextValue: LoadingContextType = useMemo(() => ({
    loading,
    setLoadingState: setLoading
  }), [loading, setLoading]);

  return (
    <div>
      <PassengerProvider value={passengerContextValue}>
        <LoadingProvider value={loadingContextValue}>
          <Dimmer.Dimmable dimmed={loading}>
            <Dimmer inverted active={loading} />
            <Loader active={loading} />
            <HeaderContainer />
            <LandingPage />
          </Dimmer.Dimmable>
        </LoadingProvider>
      </PassengerProvider>
    </div>
  );
}

export default App;
