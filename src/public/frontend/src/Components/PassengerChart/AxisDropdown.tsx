import React from 'react';
import { DropdownItemProps, Dropdown, DropdownProps } from 'semantic-ui-react';
import { passengerFormFieldsToFriendlyNames } from '../AddPassengers/PassangerConstants';
import { Passenger } from '../AddPassengers/Models';

interface OwnProps {
    selectedDropdownOption: string;
    setDropdownOption: (newSelection: keyof Passenger) => void;
}

const AxisDropdown = ({ selectedDropdownOption, setDropdownOption }: OwnProps) => {

    const dropDownOptions: DropdownItemProps[] = Object.keys(passengerFormFieldsToFriendlyNames)
        .filter(key => key !== 'id' && key !== 'cabin')
        .map<DropdownItemProps>(key => ({
            text: passengerFormFieldsToFriendlyNames[key],
            value: key
        }))

    const onDropdownChange = (_: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => setDropdownOption(data.value as keyof Passenger);

    return (
        <Dropdown
            options={dropDownOptions}
            value={selectedDropdownOption}
            onChange={onDropdownChange}
            selection
        />
    )
};

export default AxisDropdown;