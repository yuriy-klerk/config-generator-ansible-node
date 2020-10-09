import {template} from 'lodash';

/**
 * @interface Template
 */
interface Template {
    /**
     *
     * @param templateText
     * @param options
     */
    compile(templateText: string, options: object): string;
}

/**
 * @class Template
 */
class Template {
    /**
     *
     * @param templateText
     * @param options
     */
    compile(templateText: string, options: object): string {
        const compiled = template(templateText);
        return compiled(options);
    }
}

export default Template;
