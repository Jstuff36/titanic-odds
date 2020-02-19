import React from 'react';
import ReactDOM from 'react-dom';
import AddPassengerModal from './AddPassengerModal';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPassengerModal />, div);
    ReactDOM.unmountComponentAtNode(div);
});