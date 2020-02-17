import React, { useContext, useState } from 'react';
import PassengerContext from '../../Context/PassengerContext';
import { Passenger } from '../AddPassengers/Models';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { passengerFormFieldsToFriendlyNames } from '../AddPassengers/PassangerConstants';
import AxisDropdown from './AxisDropdown';

const PassengerChart = () => {
    const [xAxisValue, setXAxisValue] = useState<keyof Passenger>('age');
    const { passengers } = useContext(PassengerContext);

    const createSeries = () => passengers.map(passenger => [passenger[xAxisValue], passenger.surivialPercentage])

    const chartConfig: Highcharts.Options = {
        chart: {
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter'
        },
        title: {
            text: `Surival Chance by ${passengerFormFieldsToFriendlyNames[xAxisValue]}`
        },
        series: [{
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter',
            name: 'My first series',
            data: createSeries()
        }]
    };


    return (
        <div>
            <AxisDropdown selectedDropdownOption={xAxisValue} setDropdownOption={setXAxisValue}/>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartConfig}
            />
        </div>
    );

}

export default PassengerChart;

