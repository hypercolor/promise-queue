# Hypercolor Promise Queue

## Table of Contents
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](LICENSE)
  - [More Information](#more-information)
    - [Toolchain](#toolchain)
    - [Project Repository](#project-repository)
    - [Organization Repository](#organization-repository)
    
## Introduction
This tool is used by the team at Hypercolor Digital to loop through a list of promises and execute them in a queue. This is useful for when you have a list of promises that you want to execute in a specific order, but you don't want to wait for the previous promise to resolve before executing the next one. Additionally, this tool allows you to set a maximum number of concurrent promises that can be executed at any given time.

## Installation
  - NPM 
    - `npm i @hypercolor/promise-queue`
  - Yarn 
    - `yarn add @hypercolor/promise-queue`
  
## Usage
Example:
```typescript
import { PromiseQueue } from '@hypercolor/promise-queue';

const exampleFunction = async (array: any[]) => {
    /*
    Loop through the array and execute a promise for each item.
    Accepts argument for maxConcurrent Promises to process.
    */
  
    await new PromiseQueue(1).runall(array.map((item, index) => async () => {
        //do something with the item
        await doSomething(item);
        console.log("Processed item " + index + 1 + ' of ' + array.length + ' items.);
    }));
};
```
## More Information
### Toolchain
- TypeScript
- p-Queue

#### [Project Repository](https://github.com/hypercolor/promise-queue

#### [Organization Repository](https://github.com/hypercolor/)
