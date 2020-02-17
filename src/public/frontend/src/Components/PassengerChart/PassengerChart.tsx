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

    const createSeries = () => passengers
        .filter(passenger => passenger.surivialPercentage !== undefined || passenger[xAxisValue])
        .map(passenger => [parseFloat(passenger[xAxisValue] as string), (parseFloat(passenger.surivialPercentage || ''))  * 100])

    const chartConfig: Highcharts.Options = {
        chart: {
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter'
        },
        title: {
            text: `Odds of survival by ${passengerFormFieldsToFriendlyNames[xAxisValue]}`
        },
        xAxis: {
            title: {
                text: passengerFormFieldsToFriendlyNames[xAxisValue]
            }
        },
        yAxis: {
            title: {
                text: 'Chance of Survival',
            },
            max: 100
        },
        series: [{
            type: (xAxisValue === 'embarked' || xAxisValue === 'sex') ? 'bar' : 'scatter',
            name: 'My first series',
            data: createSeries()
        }],
        credits: {
            enabled: false
        }
    };


    return (
        <div>
            <AxisDropdown selectedDropdownOption={xAxisValue} setDropdownOption={setXAxisValue} />
            <HighchartsReact
                highcharts={Highcharts}
                options={chartConfig}
            />
        </div>
    );

}

export default PassengerChart;

