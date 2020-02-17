import React, { useContext } from 'react';
import PassengerContext from '../../Context/PassengerContext';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
// TODO import these styles somewhere else
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { Passenger } from '../AddPassengers/Models';

const PassengersGrid = () => {

    const { passengers } = useContext(PassengerContext);

    const gridOptions: GridOptions = {
        suppressMovableColumns: true,
        suppressCellSelection: true,
        suppressContextMenu: true,
        deltaRowDataMode: true,
        defaultColDef: {
            suppressMenu: true,
            sortable: true,
        },
        noRowsOverlayComponentFramework: () => <div>No data present. Please enter passanger information via the dropdown.</div>,
        getRowNodeId: (data: Passenger) => data.id
    }

    const columnDefs: ColDef[] = [
        {
            headerName: 'Age',
            field: 'age'
        },
        {
            headerName: 'Cabin',
            field: 'cabin'
        },
        {
            headerName: 'Sex',
            field: 'sex',
        },
        {
            headerName: 'Number of Siblings or Spouses Aboard',
            field: 'numberOfSiblingsOrSpousesAboard'
        },
        {
            headerName: 'Number of Children Aboard',
            field: 'numberOfParentsOrChildrenAboard'
        },
        {
            headerName: 'Ticket Number',
            field: 'ticketNumber'
        },
        {
            headerName: 'Fare',
            field: 'fare'
        },
        {
            headerName: 'Cabin',
            field: 'cabin'
        },
        {
            headerName: 'Embarked',
            field: 'embarked'
        }
    ];

    return (
        <div style={{height: 400}}>
            <AgGridReact
                gridOptions={gridOptions}
                columnDefs={columnDefs}
                rowData={passengers}
            />
        </div>
    )
}

export default PassengersGrid;