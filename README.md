# Reactjs + Electron + Typescript Starter

The starter kit is designed to help developer can implement their app quickly and resolve common problem easily.

## What’s Included?

- [ReactJS](https://reactjs.org) with typescript create by [create-react-app](https://create-react-app.dev/docs/getting-started)
- [ElectronJS](https://electronjs.org) with [electron-builder](https://www.electron.build)
- [Typescript](https://typescriptlang.org)
- [Styled-components](https://www.styled-components.com/)
- [Storybook](https://storybook.js.org/)

## Project Structure

| Name | Description |
| --- | --- |
| **.vscode** | Contains VS Code specific settings |
| **build** | Contains the bundles React in production mode and electron main process. This is the code ready for pack |
| **config** | Contains all the configuration files |
| **config**/electron.config.js | Config setting for electron-builder |
| **config**/electron.tsconfig.json | Config setting for compiling electron main process code written in TypeScript. It use by ts-loader of webpack |
| **config**/webpack.config.js | Config setting for webpack to build electron main process |
| **dist** | Contains the app package build by electron-builder |
| **electron** | Contains your source code of electron main process |
| **node_modules** | Contains all your npm dependencies |
| **public** | The public folder of React project |
| **src** | Contains your source code of react application |
| .prettierrc | Config setting for Prettier formatter |
| package.json | File that contains npm dependencies as well as build scripts |
| tsconfig.json | Config settings for compiling code written in TypeScript |
| tslint.json | Config settings for TSLint code style checking |
