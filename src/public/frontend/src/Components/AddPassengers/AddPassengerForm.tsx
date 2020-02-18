import * as React from 'react';
import { Form, DropdownProps, InputOnChangeData } from "semantic-ui-react";
import { passengerFormFieldsToFriendlyNames, EMBARKED_LOCATIONS, GENDER_DROPDOWN_ITEMS } from './PassangerConstants';
import { Passenger } from './Models';
import './AddPassengerModal.css';

interface OwnProps {
    passengerFormFields: Passenger;
    setPassengerFormFields: (key: string, value: string) => void;
}

const AddPassangerForm = ({ passengerFormFields, setPassengerFormFields }: OwnProps) => {
    return (
        <Form className={'formContianer'}>
            {
                Object.keys(passengerFormFields).map(fieldKey => {
                    if (fieldKey === 'sex' || fieldKey === 'embarked') {
                        return (
                            <Form.Dropdown
                                selection
                                label={passengerFormFieldsToFriendlyNames[fieldKey]}
                                key={fieldKey}
                                options={fieldKey === 'sex' ? GENDER_DROPDOWN_ITEMS : EMBARKED_LOCATIONS}
                                value={passengerFormFields[fieldKey]}
                                onChange={(_, { value }: DropdownProps) => setPassengerFormFields(fieldKey, value as string)}
                            />
                        )
                    } else {
                        return (
                            <Form.Input
                                key={fieldKey}
                                label={passengerFormFieldsToFriendlyNames[fieldKey]}
                                value={passengerFormFields[fieldKey]}
                                onChange={((_, { value }: InputOnChangeData) => setPassengerFormFields(fieldKey, value))}
                            />
                        )
                    }
                })
            }
        </Form>
    )
}

export default AddPassangerForm;