import * as React from 'react';
import { DragEventHandler } from 'react';
import { Passenger } from './Models';

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

    const handleFileDrop: DragEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const files = event.dataTransfer.files;
        const file = files[0];
        const fileReader = new FileReader();
        fileReader.onload = () => {
            const text = (fileReader.result as string).replace(/[="]/g, '');
        }
        fileReader.readAsText(file);
    }

    return (
        <div onDrop={handleFileDrop}>
            Drag and drop something here to test
        </div>
    )
}

export default AddPassangerDragAndDrop;