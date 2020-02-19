export interface Passenger {
    id: string;
    pClass: string;
    sex: string;
    age: string;
    numberOfSiblingsOrSpousesAboard: string;
    numberOfParentsOrChildrenAboard: string;
    ticketNumber: string;
    fare: string;
    cabin: string;
    embarked: string;
    surivialPercentage?: number;
}