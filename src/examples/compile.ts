import ConfigGenerator from "../index";

const ConfigGeneratorHandler: ConfigGenerator = new ConfigGenerator();
ConfigGeneratorHandler.compile('src/example-configs/test-config', {'VALUE': 'Some value'}).then((compiledTemplate) => {
    console.log(compiledTemplate);
}).catch(() => {
    console.log('Something went wrong...');
});
