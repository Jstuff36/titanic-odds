import React, { useContext, useState } from 'react';
import { Button, Modal, DropdownProps, Dropdown } from 'semantic-ui-react';
import AddPassangerForm from './AddPassengerForm';
import { PASSANGER_FORM_INITIAL_STATE, IMPORT_OPTIONS } from './PassangerConstants';
import AddPassangerDragAndDrop from './AddPassengerDragAndDrop';
import { Passenger } from './Models';
import axios, { AxiosResponse } from 'axios';
import PassengerContext from '../../Context/PassengerContext';
import { fetchPassengers } from '../../ApiCall';

interface OwnProps { }

const AddPassangerModal = ({ }: OwnProps) => {

    const { updatePassengers } = useContext(PassengerContext);

    const [passengerFormFields, setPassengerFormFields] = useState<Passenger>(PASSANGER_FORM_INITIAL_STATE)
    const [importType, setImportType] = useState<string | null>(null)

    const postPassengers = (passengers: Passenger[]) => axios.post('/api/v1/passengar', passengers);

    const onSubmit = async () => {
        try {
            await postPassengers([passengerFormFields]);
            await fetchPassengers(updatePassengers);
            setImportType(null);
        } catch (err) {
            // TODO handle error
            console.log(err);
        }
    };

    const onFormChange = (key: string, value: string) => setPassengerFormFields({ ...passengerFormFields, [key]: value });

    const onImport = async (passengers: Passenger[]) => {
        try {
            await postPassengers(passengers);
            await fetchPassengers(updatePassengers);
            setImportType(null);
        } catch (err) {
            // TODO handle error
            console.log(err);
        }
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
                        <AddPassangerForm setPassengerFormFields={onFormChange} passengerFormFields={passengerFormFields} />
                        :
                        <AddPassangerDragAndDrop onImportPassangers={onImport} />
                }
            </Modal.Content>
            <Modal.Actions><Button content={'Submit'} onClick={onSubmit}></Button></Modal.Actions>
        </Modal>
    );
};

export default AddPassangerModal