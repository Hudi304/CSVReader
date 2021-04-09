import { resolve } from "node:path";
import { Lead } from "../model/lead";
import { Residence } from "../model/residence";

const fs = require("fs");
const parse = require("csv-parse");

let areResidencesInited: boolean = false
let areLeadsInited : boolean = false

let residences: Residence[] = [];
let leads: Lead[] = []

function getLeadByName(name: string) : Lead {
  let ret :  Lead = new Lead()
  leads.forEach(lead => {
    if (lead.getName() == name) {
     // console.log("----- found lead -----")
      ret = lead
      return
    }
  })
  return ret
}

let residenceParser = parse({ delimiter: "," },function (err: any, data: string[][]) {
  data.forEach((index) => {
    let leads: Lead[] = [];
    let lead: Lead = getLeadByName(index[6])!
    //console.log(index[6])
    //console.log(lead)
    leads.push(lead);

      let residence : Residence = new Residence(
        index[0], //address
        index[1], //city
        parseInt(index[2]), // zip
        index[3], //state
        parseFloat(index[4]), //lat
        parseFloat(index[5]), //long
        leads, //lead
        index[7], //consDate
        parseInt(index[8]), //minVal
        parseInt(index[9]), //maxVal
        parseInt(index[10]), //propSurface
        parseFloat(index[11]) //houseSurface
      );
      residences.push(residence);
      //console.log(residences)
    });
  }
);

let leadParser = parse( { delimiter: "," },function (err: any, data: string[][]) {data.forEach((index) => {
    let lead: Lead = new Lead();
      lead.setName(index[0])
      lead.setIsOwner(strToBoolean(index[1]))
      lead.setCreditScore(Number(index[2]))
      lead.setAge(Number(index[3]))
      lead.setPhoneNo(index[4])
      lead.setEmail(index[5])
      lead.setEthnicity(index[6])
      lead.setMinIncome(Number(index[7]))
      lead.setMaxIncome(Number(index[8]))
    
      leads.push(lead)
    });
  }
);



function strToBoolean(str: string) : boolean {
  if (str == "TRUE") {
    return true
  } else {
    return false
  }
}

export class CsvDataSource {

  async readResidenceFileToJSON() {
    let ret = new Promise<Residence[]>(async (resolve, reject) => {
      if (areLeadsInited == false) {
        await this.readLeadFileToJSON()
      }

      let reader = fs.createReadStream("./src/data_layer/resources/residenceData.csv")
        .pipe(residenceParser);
        
        reader.on("end", () => {
        areResidencesInited = true
        residences.shift();
        //console.log("-- finished reading Residences --");
        resolve(residences);
      });
    });
    return ret;
  }

  async readLeadFileToJSON() {
    let ret = new Promise<Lead[]>((resolve,reject) => {
      let reader = fs
        .createReadStream("./src/data_layer/resources/leadData.csv")
        .pipe(leadParser);
      reader.on("end", () => {
        areLeadsInited = true
        leads.shift();
        //console.log("-- finished reading Leads --");
        resolve(leads);
      });
    });
    return ret;
  }

 

  async getByAdress(adress : string) : Promise<Residence> {
    if (areResidencesInited == false) {
      //console.log("---- getting residences -----")
      await this.getResidences()
    }

    let ret = new Promise<Residence>((resolve, reject) => {
      residences.forEach(residence => {
        if (residence.getAddress() == adress) {
          //console.log("----- found one -----")
          resolve( residence )
        }
      })
    })
    return ret
  }

  async searchByAdress(adress: string, state: string, zip: number) {
    if (areResidencesInited == false) {
      //console.log("---- getting residences -----")
      await this.getResidences()
    }

    let residencesReturned : Residence[] =[]
    let ret = new Promise<Residence[]>((resolve, reject) => {
      residences.forEach(residence => {
        if (residence.getAddress() == adress 
         && residence.getState() == state
          && residence.getZip() == zip
        ){
          //console.log("----- found one -----")
          residencesReturned.push(residence)
          resolve( residencesReturned )
        }
      })
    })
    return ret
  }

  async getResidences() {
    let res = await this.readResidenceFileToJSON()
    return residences
  }
  async getLeads() {
    let res = await this.readLeadFileToJSON()
    return residences
  }
}
