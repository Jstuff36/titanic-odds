import React from 'react';
import ReactDOM from 'react-dom';
import AxisDropdown from './AxisDropdown';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AxisDropdown selectedDropdownOption={'test'} setDropdownOption={() => null} />, div);
    ReactDOM.unmountComponentAtNode(div);
});