import * as React from 'react';
import { Button, Modal, Form, DropdownItemProps, DropdownProps, InputOnChangeData, Dropdown } from 'semantic-ui-react';
import AddPassangerForm from './AddPassangerForm';
import { useState } from 'react';
import { PASSANGER_FORM_INITIAL_STATE, IMPORT_OPTIONS } from './PassangerConstants';
import AddPassangerDragAndDrop from './AddPassangerDragAndDrop';
import { PassengerFormFields } from './Models';
import axios from 'axios';

interface OwnProps { }

const AddPassangerModal = ({ }: OwnProps) => {

    const [passangerFormFields, setPassangerFormFields] = useState<PassengerFormFields[]>([PASSANGER_FORM_INITIAL_STATE])
    const [importType, setImportType] = useState<string | null>(null)

    const onSubmit = async () => {
        try {
            const {data} = await axios.post('/api/v1/passengar', passangerFormFields)
            console.log(data);
        } catch (err) {
            // TODO handle error
            console.log(err);
        }
    };

    const onFormChange = (key: string, value: string) => setPassangerFormFields([{ ...passangerFormFields[0], [key]: value }]);

    const onImport = (formFields: PassengerFormFields[]) => {

    }

    console.log('Import type');

    return (
        <Modal
            open={!!importType}
            trigger={
                <Dropdown
                    selection
                    label={"Add Passengars"}
                    options={IMPORT_OPTIONS}
                    onChange={(_, { value }: DropdownProps) => setImportType(value as string)}
                />
            }>
            <Modal.Header>Add Passengar Information</Modal.Header>
            <Modal.Content>
                {
                    importType === 'form' ?
                        <AddPassangerForm setPassangerFormFields={onFormChange} passangerFormFields={passangerFormFields[0]} />
                        :
                        <AddPassangerDragAndDrop onImportPassangers={onImport} />
                }
            </Modal.Content>
            <Modal.Actions><Button content={'Submit'} onClick={onSubmit}></Button></Modal.Actions>
        </Modal>
    );
};

export default AddPassangerModal