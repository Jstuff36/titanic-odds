import React from 'react';
import ReactDOM from 'react-dom';
import PassengersGrid from './PassengersGrid';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PassengersGrid />, div);
    ReactDOM.unmountComponentAtNode(div);
});