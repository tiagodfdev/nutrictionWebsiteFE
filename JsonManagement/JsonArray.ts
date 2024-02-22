/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-constructor */
import fs from 'fs';
import path from 'path';
import JsonFile from './JsonFile';

class JsonArray extends JsonFile {
/**
     * Track or create a Json file from Zip.
     * @param pathUrl A path to the Json or Zip file.
     * @param fileName A filename without extension.
     * @param createJsonFile An optional param to extract and create a json file from a zip file.
     */

  arrayKey?:string

  dataResult:Object[]

  constructor(pathUrl:string, fileName:string, arrayKey?:string) {
    super(pathUrl, fileName);
    this.arrayKey = arrayKey;
    if (this.arrayKey) {
      this.dataResult = JSON.parse(fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${this.pathUrl}`)}/${this.fileName}.json`, 'utf-8'))[`${this.arrayKey}`];
    } else {
      this.dataResult = JSON.parse(fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${this.pathUrl}`)}/${this.fileName}.json`, 'utf-8'));
    }
  }

  /**
     * Get all elements of a Array Json.
     * @returns A Array of objects
     */
  public getAll(): Array<Object> {
    return this.dataResult;
  }

  /**
     * Get one object which match a given key:value from a Array Json.
     * @param key A Key to indicate a matching element has been found on a Array Json.
     * @param value A value to indicate a matching element has been found on a Array Json.
     * @returns {Object} A object that match a given key:value.
     */
  public getOneByKey(key:string, value:string):Object {
    let objSearched!: Object;
    const allData = this.dataResult;

    for (let i = 0; allData.length > i; i += 1) {
      const arrayOfKeys = (Object.keys(allData[i]));
      const arrayOfValues = (Object.values(allData[i]));
      if (arrayOfKeys.includes(key)
        && arrayOfValues.includes(value)
        && (arrayOfValues[arrayOfKeys.indexOf(key)] === value)) {
        objSearched = allData[i];
        break;
      }
    }
    return objSearched;
  }

  /**
     * Get an Array which match a given key:value from a Array Json.
     * @param key A property name to indicate a matching element has been found on a Array Json.
     * @returns {Array} An array of string that match a given key.
     */
  public getArrayByKey(key:string):string[] {
    const allData = this.dataResult;

    const result:string[] = allData.map((item) => item[key as keyof Object] as unknown as string);
    return result;
  }

  /**
     * Get an filtered object array which match a given keys from a Array Json.
     * @param keys A property names to indicate a matching element has been found on a Array Json.
     * @returns {Object[]} An array of objects that match a given keys.
     */
  public filterElementsByKeys(keys:string[]):Object[] {
    const allData = this.dataResult;
    const filtered = allData.map((obj) => {
      let filteredObj = {};
      // eslint-disable-next-line guard-for-in
      for (const key in obj) {
        if (keys.includes(key)) {
          filteredObj = { ...filteredObj, [key]: obj[key as keyof typeof obj] };
        }
      }
      return filteredObj;
    });
    return filtered;
  }

  public getIdFromKeyValue(key:string, value:string) {
    const result:number[] = [];
    for (const item of this.dataResult) {
      if (item[key as keyof {}] === value) {
        result.push(item['id' as keyof{}]);
      }
    }
    if (result.length > 1) {
      throw new Error(`There is ${result.length} with same key:value! ${result}`);
    }
    return result;
  }
}
export default JsonArray;
