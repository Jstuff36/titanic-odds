import React, { useState } from 'react';
import { DragEventHandler } from 'react';
import { Passenger } from './Models';
import './AddPassengerModal.css';
import { List, Divider } from 'semantic-ui-react';

interface OwnProps {
    onImportPassangers: (passangers: Passenger[]) => void;
}

interface FileReaderEventTarget extends EventTarget {
    result: string
}

interface FileReaderEvent extends ProgressEvent {
    target: FileReaderEventTarget;
    getMessage(): string;
}

const AddPassangerDragAndDrop = ({ onImportPassangers }: OwnProps) => {

    const [fileDropIsActive, setFileDropIsActive] = useState<boolean>(false);

    const unsetFileDropIsActive = () => setFileDropIsActive(false);

    const handleFileDrop: DragEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        const file = files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const rawData = (fileReader.result as string).replace(/[="]/g, '');
        };
        fileReader.onabort = unsetFileDropIsActive;
        fileReader.onerror = unsetFileDropIsActive;
        fileReader.readAsText(file);
        
    }

    const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setFileDropIsActive(true);
    }

    return (
        <div className={'dragAndDropContainer'}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
            onDragLeave={unsetFileDropIsActive}
            tabIndex={0}
            onClick={() => setFileDropIsActive(true)}
            onBlur={unsetFileDropIsActive}
            style={fileDropIsActive ? {color: '#FFF', background: '#007FB0'} : {}}
        >
            <List>
                <List.Item><b>Import portfolio positions by copying and pasting from a spreadsheet</b></List.Item>
                <List.Item>Click into this area and paste with Ctrl+V</List.Item>
                <List.Item><Divider /></List.Item>
                <List.Item><b>Alternatively, drag and drop CSV file into this area</b></List.Item>
                <List.Item>Please provide data in the below format</List.Item>
                <List.Item>The header row is not necessary</List.Item>
                <List.Item><br /></List.Item>
                <List.Item>
                    <table className={'exampleTable'}>
                        <tr>
                            <th>Passenger Class</th>
                            <th>Sex</th>
                            <th>Age</th>
                            <th># of siblings/spouses aboard</th>
                            <th># of parents/hildren aboard</th>
                            <th>Ticket Number</th>
                            <th>Fare</th>
                            <th>Cabin</th>
                            <th>Embarked</th>
                        </tr>
                        <tr>
                            <td>1, 2 or 3</td>
                            <td>Male or Female</td>
                            <td>26</td>
                            <td>3</td>
                            <td>2</td>
                            <td>123456</td>
                            <td>8.50</td>
                            <td>122</td>
                            <td>C = Cherbourg, Q = QueensTown, S = Southampton</td>
                        </tr>
                    </table>
                </List.Item>
            </List>
        </div>

    )
}

export default AddPassangerDragAndDrop;