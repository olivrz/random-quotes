//npm xlsx package is used to parse the excel file containing quotes
const xlsx = require('xlsx');

const parseExcel = (filename) => {

    const excelData = xlsx.readFile(filename);
    return Object.keys(excelData.Sheets).map( (name, index, array) =>
        ({
        name,
        data: xlsx.utils.sheet_to_json(excelData.Sheets[name], {header: 1, skipHeader: true})
    }) );

};

const excelData = parseExcel("./quotes-database.xlsx");/*.forEach(element => {
    console.log(element.data[4][0]);
});*/
const sheet1 = excelData[0];

let allQuotes = [];
for(let element of sheet1.data ) {
    allQuotes.push(element[0]);
}
allQuotes = allQuotes.slice(4, allQuotes.length - 1);

