import { Lead } from "./lead";

export class Residence {
  private address!: string;
  private city!: string;
  private zip!: number;
  private state!: string;
  private lead!: Lead[];
  private constructionDate!: string;
  private minValue!: number;
  private maxValue!: number;
  private propSurface!: number;
  private houseSurface!: number;
  private lat!: number;
  private long!: number;

  public getLat(): number {
    return this.lat!;
  }

  public setLat(lat: number): void {
    this.lat! = lat!;
  }

  public getLong(): number {
    return this.long!;
  }

  public setLong(long: number): void {
    this.long! = long!;
  }

  public getAddress(): string {
    return this.address;
  }
  public setAddress(address: string): void {
    this.address = address;
  }
  public getCity(): string {
    return this.city;
  }
  public setCity(city: string): void {
    this.city = city;
  }
  public getZip(): number {
    return this.zip;
  }
  public setZip(zip: number): void {
    this.zip = zip;
  }
  public getState(): string {
    return this.state;
  }
  public setState(state: string): void {
    this.state = state;
  }
  public getLead(): Lead[] {
    return this.lead;
  }
  public setLead(lead: Lead[]): void {
    this.lead = lead;
  }
  public getConstructionDate(): string {
    return this.constructionDate;
  }
  public setConstructionDate(constructionDate: string): void {
    this.constructionDate = constructionDate;
  }
  public getMinValue(): number {
    return this.minValue;
  }
  public setMinValue(minValue: number): void {
    this.minValue = minValue;
  }
  public getMaxValue(): number {
    return this.maxValue;
  }
  public setMaxValue(maxValue: number): void {
    this.maxValue = maxValue;
  }
  public getPropSurface(): number {
    return this.propSurface;
  }
  public setPropSurface(propSurface: number): void {
    this.propSurface = propSurface;
  }
  public getHouseSurface(): number {
    return this.houseSurface;
  }
  public setHouseSurface(houseSurface: number): void {
    this.houseSurface = houseSurface;
  }

  constructor(
    address: string,
    city: string,
    zip: number,
    state: string,
    lat: number,
    long: number,
    lead: Lead[],
    constructionDate: string,
    minValue: number,
    maxValue: number,
    propSurface: number,
    houseSurface: number
  ) {
    this.address = address;
    this.city = city;
    this.zip = zip;
    this.state = state;
    this.lead = lead;
    this.constructionDate = constructionDate;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.propSurface = propSurface;
    this.houseSurface = houseSurface;
    this.lat = lat;
    this.long = long;
  }

  //   constructor() {}
}
