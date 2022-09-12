/* eslint-disable class-methods-use-this */
import { Iingredient } from '../../types';
import instance from '../axios';

class nutrictionDB {
  static async getAll():Promise<Iingredient[]> {
    try {
      const res = await instance.get<Iingredient[]>('nutrictionDB');
      return res.data;
    } catch (error:any) {
      return error;
    }
  }

  static async getOneByUrl(pathUrl:string):Promise<Iingredient[]> {
    try {
      const res = await instance.get<Iingredient[]>(`nutrictionDB?pathUrl=${pathUrl}`);
      return res.data;
    } catch (error:any) {
      return error;
    }
  }
}
export default nutrictionDB;
