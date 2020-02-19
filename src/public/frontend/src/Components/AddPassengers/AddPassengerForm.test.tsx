import React from 'react';
import ReactDOM from 'react-dom';
import AddPassengerForm from './AddPassengerForm';
import { Passenger } from './Models';

const passenger: Passenger = {
    age: '1',
    cabin: '2',
    embarked: 'C',
    fare: '3',
    id: '1',
    numberOfParentsOrChildrenAboard: '1',
    numberOfSiblingsOrSpousesAboard: '2',
    pClass: '1',
    sex: 'female',
    ticketNumber: '1'
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPassengerForm passengerFormFields={passenger} setPassengerFormFields={() => null} />, div);
    ReactDOM.unmountComponentAtNode(div);
});