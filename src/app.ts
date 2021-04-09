
import { CsvDataSource } from "./data_layer/data_source/csv_data_source"
console.log("Starting application ....")

async function appLogic() {
    let csvDataSource: CsvDataSource = new CsvDataSource()
    await csvDataSource.getResidences()
    // csvDataSource.getLeads()
    csvDataSource.getByAdress("2800 SW 2nd Ave")
        .then(data => {console.log(data)})
    csvDataSource.searchByAdress("2800 SW 2nd Ave", 'Florida', 33129)
        .then(data => { console.log(data) })
}



appLogic()