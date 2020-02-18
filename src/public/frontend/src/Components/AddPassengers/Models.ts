export type Sex = 'male' | 'female';

export type PortOfEmbarkation = 'Q' | 'C' | 'S';

export interface Passenger {
    id: string;
    pClass: string;
    sex: Sex;
    age: string;
    numberOfSiblingsOrSpousesAboard: string;
    numberOfParentsOrChildrenAboard: string;
    ticketNumber: string;
    fare: string;
    cabin: string;
    embarked: PortOfEmbarkation;
    surivialPercentage?: string;
}