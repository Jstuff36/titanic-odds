import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container } from "semantic-ui-react";
import AddPassangerModal from "../AddPassangers/AddPassangerModal";
import { PassengerProvider, PassengerContextType } from "../../Context/PassangerContext";
import { Passenger } from "../AddPassangers/Models";
import PassengersGrid from "../PassengersGrid/PassengersGrid";
import axios, { AxiosResponse } from 'axios';

const LandingPage = () => {

    const [passengers, setPassengers] = useState<Passenger[]>([]);

    const fetchPassengers = useCallback(async () => await axios.get<Passenger[]>('/api/v1/passengar'), []);

    useEffect(() => {
        fetchPassengers().then(({data}) => setPassengers(data));
    }, [fetchPassengers, setPassengers])

    const passengerContextValue: PassengerContextType = useMemo(() => (
        {
            passengers,
            updatePassengers: setPassengers
        }
    ), [passengers, setPassengers]);

    return (
        <PassengerProvider value={passengerContextValue}>
            <Container>
                <AddPassangerModal />
                <PassengersGrid />
            </Container>
        </PassengerProvider>
    )
};

export default LandingPage;