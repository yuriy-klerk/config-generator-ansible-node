# Config-generator-ansible-node
[![npm (tag)](https://img.shields.io/npm/v/config-generator-ansible-node?style=for-the-badge)](https://www.npmjs.com/package/config-generator-ansible-node)
##### Config-generator-ansible-node is a TypeScript library for generating config and secure delivery using ansible for any of your services like nginx or mysql from your NodeJS application.

### Step 1. Installing config-generator-ansible-node

```shell script
npm i config-generator-ansible-node --save 
```

```typescript
import ConfigGenerator from 'config-generator-ansible-node'; 
```

### Step 2. Installing Ansible


Please see the ansible documentation:
 https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html
 
### Additional information: 


### Usage
```typescript
const ConfigGeneratorHandler = new ConfigGenerator();
ConfigGeneratorHandler.generate('/tmp/YOUR-SERVICE.conf', {'PORT': 3000}, '/etc/YOUR-SERVICE.conf').then(() => {
    console.log('Awesome :)');
}).catch(() => {
    console.log('Something went wrong...');
});
```
### Methods
```typescript
1. generate(sourcePath: string, options: object, destinationPath: string): Promise<void>;
2. compile(sourcePath: string, options: object): Promise<string>;
3. write(destinationPath: string, configData: string): Promise<boolean>;
```


### Products that use Config-generator-ansible-node


[![Alt text](https://callaba.io/img/logo-black.svg)](https://callaba.io/)


### License

[Apache License 2.0](https://github.com/yuriy-klerk/config-generator-ansible-node/blob/main/LICENSE)
