import React, { useContext, useState } from 'react';
import { Button, Modal, Form, DropdownItemProps, DropdownProps, InputOnChangeData, Dropdown } from 'semantic-ui-react';
import AddPassangerForm from './AddPassangerForm';
import { PASSANGER_FORM_INITIAL_STATE, IMPORT_OPTIONS } from './PassangerConstants';
import AddPassangerDragAndDrop from './AddPassangerDragAndDrop';
import { Passenger } from './Models';
import axios, { AxiosResponse } from 'axios';
import PassengerContext from '../../Context/PassangerContext';

interface OwnProps { }

const AddPassangerModal = ({ }: OwnProps) => {
    
    const {passengers, updatePassengers} = useContext(PassengerContext);

    const [passangerFormFields, setPassangerFormFields] = useState<Passenger[]>([PASSANGER_FORM_INITIAL_STATE])
    const [importType, setImportType] = useState<string | null>(null)

    const onSubmit = async () => {
        try {
            const {data}: AxiosResponse<Passenger> = await axios.post('/api/v1/passengar', passangerFormFields)
            updatePassengers([...passengers, data]);
            setImportType(null);
        } catch (err) {
            // TODO handle error
            console.log(err);
        }
    };

    const onFormChange = (key: string, value: string) => setPassangerFormFields([{ ...passangerFormFields[0], [key]: value }]);

    const onImport = (formFields: Passenger[]) => {

    }

    return (
        <Modal
            open={!!importType}
            onClose={() => setImportType(null)}
            trigger={
                <Dropdown
                    selection
                    text={"Add Passengars"}
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