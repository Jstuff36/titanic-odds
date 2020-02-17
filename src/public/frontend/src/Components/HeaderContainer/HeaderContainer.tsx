import React from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import AddPassangerModal from "../AddPassengers/AddPassengerModal";

const HeaderContainer = () => {
    return (
        <Menu inverted>
            <Container>
                <Menu.Item as={'h2'} content={'Are your odds of survival Titanic?'} style={{marginBottom: 0}}/>
                <AddPassangerModal />
            </Container>
        </Menu>
    )
};

export default HeaderContainer;