import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Container } from "semantic-ui-react";
import AddPassangerModal from "../AddPassengers/AddPassengerModal";
import { PassengerProvider, PassengerContextType } from "../../Context/PassengerContext";
import { Passenger } from "../AddPassengers/Models";
import PassengersGrid from "../PassengersGrid/PassengersGrid";
import PassengerChart from "../PassengerChart/PassengerChart";
import { fetchPassengers } from "../../ApiCall";

const LandingPage = () => {

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
        <PassengerProvider value={passengerContextValue}>
            <Container>
                <AddPassangerModal />
                <PassengerChart />
                <PassengersGrid />
            </Container>
        </PassengerProvider>
    )
};

export default LandingPage;