import React, { useContext } from 'react';
import PassengerContext from '../../Context/PassengerContext';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Passenger } from '../AddPassengers/Models';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { passengerPropertyToUserFriendlyName } from '../AddPassengers/PassangerConstants';

const PassengersGrid = () => {

    const { passengers } = useContext(PassengerContext);

    const gridOptions: GridOptions = {
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
            headerName: 'Odds of Survival',
            field: 'surivialPercentage',
            valueFormatter: ({data}) => (parseFloat(data.surivialPercentage) * 100).toFixed(2),
        },
        {
            headerName: 'Age',
            field: 'age',
            width: 100,
            comparator: ((a, b, nodeA, nodeB, _) => {
                if (!a) {
                    return 1;
                } else if (!b) {
                    return -1;
                } else {
                    return parseFloat(a) - parseFloat(b);
                }
            })
        },
        {
            headerName: 'Cabin',
            field: 'cabin',
            width: 100
        },
        {
            headerName: 'Sex',
            field: 'sex',
            width :100
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
            headerName: 'Embarked',
            field: 'embarked',
            valueFormatter: ({ data }) => passengerPropertyToUserFriendlyName[data.embarked]
        }
    ];

    return (
        <div style={{ height: 650 }} className="ag-theme-balham">
            <AgGridReact
                gridOptions={gridOptions}
                columnDefs={columnDefs}
                rowData={passengers}
            />
        </div>
    )
}

export default PassengersGrid;