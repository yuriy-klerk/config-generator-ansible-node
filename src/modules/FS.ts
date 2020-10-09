import {readFile} from 'fs';
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
    write(destinationPath: string, configData: string): Promise<void>;
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
    write(destinationPath: string, configData: string): Promise<void> {
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
}

export default FS;
