import React from 'react';
import ReactDOM from 'react-dom';
import PassengerChart from './PassengerChart';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PassengerChart />, div);
    ReactDOM.unmountComponentAtNode(div);
});