import React, { useState, useMemo } from "react";
import { Container } from "semantic-ui-react";
import AddPassangerModal from "../AddPassangers/AddPassangerModal";
import { PassengerProvider, PassengerContextType } from "../../Context/PassangerContext";
import { Passenger } from "../AddPassangers/Models";

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
            </Container>
        </PassengerProvider>
    )
};

export default LandingPage;