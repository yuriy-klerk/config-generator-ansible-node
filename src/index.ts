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
interface ConfigGenerator {
    generate(sourcePath: string, options: object, destinationPath: string): Promise<void>;
}

/**
 * @class ConfigGenerator
 */
class ConfigGenerator {


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
                fileStreamHandler.write(destinationPath, compiledTemplate).then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });

            }).catch(() => {
                reject();
            });
        });
    };

    compile(sourcePath: string, options: object): Promise<string> {
        return new Promise((resolve: any, reject: any) => {
            fileStreamHandler.read(sourcePath).then((configData: string) => {
                const TemplateHandler = new Template();
                const compiledTemplate: string = TemplateHandler.compile(configData, options);
                resolve(compiledTemplate);
            }).catch(() => {
                reject();
            });
        });
    }
}

export default ConfigGenerator;

