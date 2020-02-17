import { Passenger } from "./Models"
import * as Papa from 'papaparse';

const buildPassengersFromRows = (parsedData: string[][]): Passenger[] => {
    return parsedData.map<Passenger>(row => ({
        id: row[0],
        pClass: row[1],
        sex: row[2],
        age: row[3],
        numberOfSiblingsOrSpousesAboard: row[4],
        numberOfParentsOrChildrenAboard: row[5],
        ticketNumber: row[6],
        fare: row[7],
        cabin: row[8],
        embarked: row[9]
    }))
}

export const readFromCsv = (textData: string): Passenger[] => {
    let parsedOutput = Papa.parse(textData, {skipEmptyLines: true});
    const knownDelimiters = ['\t', ' '];
    knownDelimiters.forEach(knownDelimiter => {
        if (parsedOutput.errors.length > 0) {
            parsedOutput = Papa.parse(textData, {
                delimiter: knownDelimiter,
                skipEmptyLines: true
            })
        }
    })
    let parsedData = parsedOutput.data;
    if (parsedOutput.length === 0) {
        throw new Error('Unable to parse data');
    }
    const maybeColumnHeader = parsedData[0][0];
    if (maybeColumnHeader === 'PassengerId' || maybeColumnHeader === 'Passenger Id') {
        parsedData.shift()
    }

    return buildPassengersFromRows(parsedData);
}

