# Config-generator-ansible-node
##### Config-generator package is a TypeScript library for generating configuration for any service, like nginx or mysql from your NodeJS application.

### Step 1. Installing config-generator-ansible-node

```shell script
npm i --save 
```

```typescript
import ConfigGenerator from 'config-generator'; 
```

### Step 2. Installing Ansible


Please see the ansible documentation:
 https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html
 
### Additional information: 


### Usage
```typescript
const ConfigGeneratorHandler: ConfigGenerator = new ConfigGenerator();
ConfigGeneratorHandler.generate('/Users/user/Desktop/sls.conf', {'PORT': 3000}, '/etc/sls.conf').then(() => {
    console.log('Awesome :)');
}).catch(() => {
    console.log('Something went wrong...');
});
```
### Products that use Config-generator-ansible-node

[![Alt text](https://callaba.io/img/logo-black.svg)](https://callaba.io/)


##№ License

[Apache License 2.0](https://github.com/yuriy-klerk/config-generator-ansible-node/blob/main/LICENSE)
