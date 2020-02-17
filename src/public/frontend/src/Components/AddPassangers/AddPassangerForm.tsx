import * as React from 'react';
import { Form, DropdownProps, InputOnChangeData } from "semantic-ui-react";
import { passengerFormFieldsToFriendlyNames, EMBARKED_LOCATIONS, GENDER_DROPDOWN_ITEMS } from './PassangerConstants';
import { Passenger } from './Models';

interface OwnProps {
    passangerFormFields: Passenger;
    setPassangerFormFields: (key: string, value: string) => void;
}

const AddPassangerForm = ({ passangerFormFields, setPassangerFormFields }: OwnProps) => {
    return (
        <Form>
            {
                Object.keys(passangerFormFields).map(fieldKey => {
                    if (fieldKey === 'sex' || fieldKey === 'embarked') {
                        return (
                            <Form.Dropdown
                                selection
                                label={passengerFormFieldsToFriendlyNames[fieldKey]}
                                key={fieldKey}
                                options={fieldKey === 'sex' ? GENDER_DROPDOWN_ITEMS : EMBARKED_LOCATIONS}
                                value={passangerFormFields[fieldKey]}
                                onChange={(_, { value }: DropdownProps) => setPassangerFormFields(fieldKey, value as string)}
                            />
                        )
                    } else {
                        return (
                            <Form.Input
                                key={fieldKey}
                                label={passengerFormFieldsToFriendlyNames[fieldKey]}
                                value={passangerFormFields[fieldKey]}
                                onChange={((_, { value }: InputOnChangeData) => setPassangerFormFields(fieldKey, value))}
                            />
                        )
                    }
                })
            }
        </Form>
    )
}

export default AddPassangerForm;