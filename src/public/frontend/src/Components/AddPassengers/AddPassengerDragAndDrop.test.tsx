import React from 'react';
import ReactDOM from 'react-dom';
import AddPassengerDragAndDrop from './AddPassengerDragAndDrop';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddPassengerDragAndDrop onImportPassangers={() => null}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});