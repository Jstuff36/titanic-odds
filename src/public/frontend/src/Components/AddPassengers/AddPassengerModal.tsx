import React, { useContext, useState } from 'react';
import { Button, Modal, DropdownProps, Dropdown } from 'semantic-ui-react';
import AddPassangerForm from './AddPassengerForm';
import { PASSANGER_FORM_INITIAL_STATE, IMPORT_OPTIONS } from './PassangerConstants';
import AddPassangerDragAndDrop from './AddPassengerDragAndDrop';
import { Passenger } from './Models';
import axios from 'axios';
import PassengerContext from '../../Context/PassengerContext';
import { fetchPassengers } from '../../ApiCall';

interface OwnProps { }

const AddPassangerModal = ({ }: OwnProps) => {

    const { updatePassengers } = useContext(PassengerContext);

    const [passengerFormFields, setPassengerFormFields] = useState<Passenger>(PASSANGER_FORM_INITIAL_STATE)
    const [importType, setImportType] = useState<string | null>(null)

    const onClose = () => setImportType(null);

    const postPassengers = (passengers: Passenger[]) => axios.post('/api/v1/passengar', passengers);

    const onSubmit = async () => {
        try {
            await postPassengers([passengerFormFields]);
            await fetchPassengers(updatePassengers);
            setPassengerFormFields(PASSANGER_FORM_INITIAL_STATE);
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

    const renderTrigger = () => {
        return (
            <Dropdown item text={"Add Passengers"}>
                <Dropdown.Menu>
                    {
                        IMPORT_OPTIONS.map(option =>
                            <Dropdown.Item onClick={() => setImportType(option.value)}>{option.text}</Dropdown.Item>
                        )
                    }
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <Modal
            size={'large'}
            open={!!importType}
            onClose={onClose}
            trigger={renderTrigger()}>
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