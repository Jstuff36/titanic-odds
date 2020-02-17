import React, { useContext } from 'react';
import PassengerContext from '../../Context/PassangerContext';
import { List } from 'semantic-ui-react';

const Passengers = () => {

    const {passengers} = useContext(PassengerContext);

    const renderPassengerList = () => passengers.map(passenger => (
        <List.Item>
            
        </List.Item>
    ))

    return (
        <List>
            {renderPassengerList()}
        </List>
    )
}

export default Passengers;