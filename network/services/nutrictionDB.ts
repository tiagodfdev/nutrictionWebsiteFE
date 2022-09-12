/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

import fs from 'fs';
import path from 'path';
import Jszip from 'jszip';
import { Iingredient } from '../../types';

class nutrictionDB {
  static async getAll():Promise<Iingredient[]> {
    const fileExists = fs.existsSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('frontEnd/') + 9) - __dirname.length), 'utils/consts')}/data.json`);
    if (!fileExists) {
      try {
        const fileContent = fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('frontEnd/') + 9) - __dirname.length), 'utils/consts')}/data.zip`);
        const jsZipInstance = new Jszip();
        const result = await jsZipInstance.loadAsync(fileContent);
        const keys = Object.keys(result.files);
        let dataResult;
        for (const key of keys) {
          const item = result.files[key];
          if (item.dir) {
            fs.mkdirSync(item.name);
          } else {
            fs.writeFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('frontEnd/') + 9) - __dirname.length), 'utils/consts')}/${item.name}`, Buffer.from(await item.async('arraybuffer')));
            dataResult = JSON.parse(fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('frontEnd/') + 9) - __dirname.length), 'utils/consts')}/data.json`, 'utf-8'));
          }
        }
        return dataResult.nutrictionDb;
      } catch (error:any) {
        return error;
      }
    } else {
      return JSON.parse(fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('frontEnd/') + 9) - __dirname.length), 'utils/consts')}/data.json`, 'utf-8')).nutrictionDb;
    }
  }

  static async getOneByUrl(pathUrl:string):Promise<Iingredient[]> {
    try {
      const allData:Iingredient[] = await this.getAll();
      let objSearched:Iingredient;
      for (let i = 0; allData.length > i; i += 1) {
        if (allData[i].pathUrl === pathUrl) {
          objSearched = allData[i];
          break;
        }
      }
      // @ts-ignore
      return [objSearched];
    } catch (error:any) {
      return error;
    }
  }
}
export default nutrictionDB;
