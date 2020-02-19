import Highcharts from 'highcharts';
import { passengerFormFieldsToFriendlyNames, passengerPropertyToUserFriendlyName } from '../AddPassengers/PassangerConstants';
import { Passenger } from '../AddPassengers/Models';
import { groupBy } from 'lodash';

const createScatterPlotSeries = (passengers: Passenger[], xAxisValue: string) => {
    return passengers
        .filter(passenger => passenger.surivialPercentage !== undefined || passenger[xAxisValue])
        .map(passenger => [parseFloat(passenger[xAxisValue] as string), (parseFloat(passenger.surivialPercentage || '')) * 100])
};

export const scatterPlotConfig = (passengers: Passenger[], xAxisValue: string): Highcharts.Options => ({
    chart: {
        height: 500,
        type: 'scatter'
    },
    title: {
        text: ''
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
        type: 'scatter',
        data: createScatterPlotSeries(passengers, xAxisValue),
        showInLegend: false
    }],
    credits: {
        enabled: false
    }
});

const createUnqiueChartSeries = (passengers: Passenger[], xAxisValue: string) => {
    const groupedPassengers = groupBy(passengers, xAxisValue);
    const results = Object.keys(groupedPassengers).map<Highcharts.SeriesOptionsType>(group => ({
        data: groupedPassengers[group]
            .filter(passenger => passenger.surivialPercentage !== undefined)
            .map(passenger => parseFloat(passenger.surivialPercentage || '') * 100),
        name: passengerPropertyToUserFriendlyName[group] || group,
        type: 'scatter',
        showInLegend: true
    }))
    return results;
}

export const scatterWithSeries = (passengers: Passenger[], xAxisValue: string): Highcharts.Options => ({
    chart: {
        height: 500,
        type: 'scatter'
    },
    title: {
        text: ''
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
    series: createUnqiueChartSeries(passengers, xAxisValue),
    credits: {
        enabled: false
    }
});