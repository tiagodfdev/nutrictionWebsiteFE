/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path from 'path';
import Jszip from 'jszip';

abstract class JsonFile {
  /**
     * Track or create a Json file from Zip.
     * @param pathUrl A path to the Json or Zip file.
     * @param fileName A filename without extension.
     * @param createJsonFile Extract and create a json file from a zip file.
     */
    pathUrl: string;

    fileName: string;

    private data = Buffer.from('')

    private _isZipFile = false;

    createJsonFile: boolean

    constructor(pathUrl:string, fileName:string, createJsonFile = true) {
      this.createJsonFile = createJsonFile;
      const jsonFileExists = fs.existsSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${pathUrl}`)}/${fileName}.json`);
      if (!jsonFileExists) {
        console.warn('Json file does not exists!');
        console.log('Checking for zip file...');
        const zipFileExists = fs.existsSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${pathUrl}`)}/${fileName}.zip`);
        if (!zipFileExists) {
          const msgError = 'File does not exists!';
          console.error(msgError);
          throw new Error(msgError);
        } else {
          this._isZipFile = true;
          this.checkZipFileIsJsonNCreateFile();
        }
      }
      this.pathUrl = pathUrl;
      this.fileName = fileName;
    }

    protected get isZipFile() {
      return this._isZipFile;
    }

    protected set isZipFile(isZipFile:boolean) {
      this._isZipFile = isZipFile;
    }

    private isThatExtension(filename:string, extension:string) {
      return ((filename.slice((filename.indexOf('.') - filename.length) + 1)).toLowerCase() === extension.toLowerCase());
    }

    private createBuffer(jsonBuffer:Buffer) {
      this.data = jsonBuffer;
    }

    private async checkZipFileIsJsonNCreateFile() {
      try {
        const fileContent = fs.readFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${this.pathUrl}`)}/${this.fileName}.zip`);
        const jsZipInstance = new Jszip();
        const fileLoaded = await jsZipInstance.loadAsync(fileContent);
        if (!this.isThatExtension(fileLoaded.files[0].name, 'json')) {
          throw new Error('The file within zip file is not a Json file.');
        } else {
          if (this.createJsonFile) {
            const keys = Object.keys(fileLoaded.files);
            for (const key of keys) {
              const item = fileLoaded.files[key];
              if (item.dir) {
                fs.mkdirSync(item.name);
              } else {
                try {
                  fs.writeFileSync(`${path.join(__dirname.slice(0, (__dirname.indexOf('.next')) - __dirname.length), `${this.pathUrl}`)}/${item.name}`, Buffer.from(await item.async('arraybuffer')));
                } catch (e) {
                  console.log(e);
                }
              }
            }
          }
          try {
            this.createBuffer(Buffer.from(await fileLoaded.files[0].async('arraybuffer')));
          } catch (e) {
            console.log(e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
}
export default JsonFile;
