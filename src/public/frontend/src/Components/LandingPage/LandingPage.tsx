import React from "react";
import { Container, Grid } from "semantic-ui-react";
import PassengersGrid from "../PassengersGrid/PassengersGrid";
import PassengerChart from "../PassengerChart/PassengerChart";
import Stats from "../Stats/Stats";

const LandingPage = () => {

    return (
        <Container >
            <Grid columns={2}>
                <Grid.Row>
                    <Grid.Column>
                        <PassengerChart />
                        <Stats />
                    </Grid.Column>
                    <Grid.Column>
                        <PassengersGrid />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
};

export default LandingPage;