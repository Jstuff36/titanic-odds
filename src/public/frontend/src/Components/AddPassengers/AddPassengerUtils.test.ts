import { readFromCsv } from "./AddPassengerUtils"


it('Creates passenger data from CSV file', () => {
    const rawText = "892	3	male	34.5	0	0	330911	7.8292		Q"
    const result = [{
        id: "892",
        pClass: "3",
        sex: "male",
        age: "34.5",
        numberOfSiblingsOrSpousesAboard: "0",
        numberOfParentsOrChildrenAboard: "0",
        ticketNumber: "330911",
        fare: "7.8292", 
        cabin: "",
        embarked: "Q"
    }]
    expect(readFromCsv(rawText)).toEqual(result);
})