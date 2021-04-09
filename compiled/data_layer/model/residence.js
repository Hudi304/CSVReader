"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
class Residence {
    constructor(address, city, zip, state, lat, long, lead, constructionDate, minValue, maxValue, propSurface, houseSurface) {
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
    getLat() {
        return this.lat;
    }
    setLat(lat) {
        this.lat = lat;
    }
    getLong() {
        return this.long;
    }
    setLong(long) {
        this.long = long;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getZip() {
        return this.zip;
    }
    setZip(zip) {
        this.zip = zip;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getLead() {
        return this.lead;
    }
    setLead(lead) {
        this.lead = lead;
    }
    getConstructionDate() {
        return this.constructionDate;
    }
    setConstructionDate(constructionDate) {
        this.constructionDate = constructionDate;
    }
    getMinValue() {
        return this.minValue;
    }
    setMinValue(minValue) {
        this.minValue = minValue;
    }
    getMaxValue() {
        return this.maxValue;
    }
    setMaxValue(maxValue) {
        this.maxValue = maxValue;
    }
    getPropSurface() {
        return this.propSurface;
    }
    setPropSurface(propSurface) {
        this.propSurface = propSurface;
    }
    getHouseSurface() {
        return this.houseSurface;
    }
    setHouseSurface(houseSurface) {
        this.houseSurface = houseSurface;
    }
}
exports.Residence = Residence;
