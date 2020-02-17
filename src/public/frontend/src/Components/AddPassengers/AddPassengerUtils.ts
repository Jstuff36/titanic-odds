import { Passenger } from "./Models"

interface ParsedCsv {
    headers: string[];
    data: string[];
}

const buildPassengersFromRows = (parsedCsv: ParsedCsv): Passenger[] => {
    return [];
}

const readFromCSV = (textData: string): ParsedCsv => {
    return { headers: [], data: [] };
}

