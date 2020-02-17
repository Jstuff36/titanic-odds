import React, { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import AddPassangerModal from "../AddPassangers/AddPassangerModal";
import { PassengerProvider, PassengerContextType } from "../../Context/PassangerContext";
import { Passenger } from "../AddPassangers/Models";
import PassengersGrid from "../PassengersGrid/PassengersGrid";

const LandingPage = () => {

    const [passengers, setPassengers] = useState<Passenger[]>([]);

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