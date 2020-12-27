import {readFile, writeFile} from 'fs';
import * as child_process from 'child_process';
/**
 * @interface FS
 */
interface FS {
    /**
     *
     * @param sourcePath
     */
    read(sourcePath: string): Promise<string>;

    /**
     *
     * @param destinationPath
     * @param configData
     */
    delivery(destinationPath: string, configData: string): Promise<void>;

    /**
     *
     * @param destinationPath
     */
    write(destinationPath: string, configData: string): Promise<any>;

}

/**
 * @class FileStream
 */
class FS {
    /**
     *
     * @param configName
     */
    read(sourcePath: string): Promise<string> {
        return new Promise((resolve: any, reject: any): any => {
            readFile(`${sourcePath}`, (err: NodeJS.ErrnoException, data: Buffer) => {
                if (err) {
                    throw new Error(err.toString());
                    reject(err.toString());
                }
                resolve(data.toString());
            });
        });
    }

    /**
     *
     * @param configName
     * @param pathFolder
     * @param configData
     */
    delivery(destinationPath: string, configData: string): Promise<void> {
        return new Promise((resolve: any, reject: any): any => {
            const writeCommand: string = `ansible localhost -m shell -a "sudo touch ${destinationPath} && echo '${configData}' > ${destinationPath}" -b`;
            child_process.exec(writeCommand, (err) => {
                if (!err) {
                    resolve();
                } else {
                    throw new Error(err.toString());
                    reject(err.toString());

                }
            });
        });
    }

    write(destinationPath: string, configData: string): Promise<any> {
        return new Promise((resolve: any, reject: any): any => {
            try {
                writeFile(destinationPath, configData, () => {
                    resolve(true);
                });
            } catch (e) {
                reject(e)
            }
        });
    }
}

export default FS;
