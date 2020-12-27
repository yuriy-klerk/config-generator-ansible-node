import ConfigGenerator from "../index";

const ConfigGeneratorHandler: ConfigGenerator = new ConfigGenerator();
ConfigGeneratorHandler.compile('src/example-configs/test-config', {'VALUE': 'Some value'}).then(async (compiledTemplate) => {
    console.log(compiledTemplate);
    await ConfigGeneratorHandler.write('src/example-configs/test-config.writed', compiledTemplate);

}).catch(() => {
    console.log('Something went wrong...');
});
