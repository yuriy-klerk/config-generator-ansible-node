/**
 * Config generator. By Yuriy Klerk.
 * This file contains a class containing a single method to generate the configuration
 */
/**
 * Import working with fs and lodash components.
 */
import FS from './modules/FS';
import Template from './modules/Template';

/**
 * @constant fileStreamHandler
 */
const fileStreamHandler: FS = new FS();

/**
 * @interface ConfigGenerator
 */
interface IConfigGenerator {
    /**
     *
     * @param sourcePath
     * @param options
     * @param destinationPath
     */
    generate(sourcePath: string, options: object, destinationPath: string): Promise<void>;

    /**
     *
     * @param sourcePath
     * @param options
     */
    compile(sourcePath: string, options: object): Promise<string>;

    /**
     *
     * @param destinationPath
     * @param configData
     */
    write(destinationPath: string, configData: string): Promise<boolean>;
}

/**
 * @class ConfigGenerator
 */
class ConfigGenerator implements IConfigGenerator {


    /**
     *
     * @param options
     */
    constructor() {

    }

    /**
     * @param configName
     * @param options
     * @param locationFolder
     */
    generate(sourcePath: string, options: object, destinationPath: string): Promise<void> {
        return new Promise((resolve: any, reject: any) => {
            fileStreamHandler.read(sourcePath).then((configData: string) => {
                const TemplateHandler = new Template();
                const compiledTemplate: string = TemplateHandler.compile(configData, options);
                fileStreamHandler.delivery(destinationPath, compiledTemplate).then(() => {
                    resolve();
                }).catch((e) => {
                    console.error(e);
                    reject();
                });

            }).catch((e) => {
                console.error(e);
                reject();
            });
        });
    };

    /**
     *
     * @param sourcePath
     * @param options
     */
    compile(sourcePath: string, options: object): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            fileStreamHandler.read(sourcePath).then((configData: string) => {
                const TemplateHandler = new Template();
                const compiledTemplate: string = TemplateHandler.compile(configData, options);
                resolve(compiledTemplate);
            }).catch((e) => {
                console.error(e);
                reject();
            });
        });
    }

    /**
     *
     * @param destinationPath
     * @param configData
     */
    write(destinationPath: string, configData: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            return fileStreamHandler.write(destinationPath, configData).then((isSuccess) => {
                resolve(isSuccess);
            }).catch((e) => {
                console.error(e);
                reject(false)
            })
        });
    }

}

export default ConfigGenerator;
