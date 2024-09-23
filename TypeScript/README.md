# Typescript

## Overview
This project is set up using Webpack and TypeScript to bundle and manage the assets of your web application. It incorporates various Webpack plugins to streamline the development process and ensure clean and efficient builds.

The project uses the following key plugins:
- **HtmlWebpackPlugin**: Generates an HTML file for your bundle automatically.
- **CleanWebpackPlugin**: Ensures that the `dist` folder is cleaned before every build, removing any old files.
- **ForkTsCheckerWebpackPlugin**: Speeds up the build process by running TypeScript type checking in a separate process.

## Table of Contents

1. [Installation](#installation)
2. [Scripts](#scripts)
3. [Webpack Configuration](#webpack-configuration)
4. [File Structure](#file-structure)
5. [Development](#development)
6. [Build](#build)
7. [Plugins Overview](#plugins-overview)
8. [Contributing](#contributing)
9. [License](#license)

---

## Installation

Before starting, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>

<details>
  <summary>Configuration Files</summary>

### package.json
<details>
  <summary>Click to show/hide file contents</summary>

```
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```
</details>

### .eslintrc.js
<details>
  <summary>Click to show/hide file contents</summary>

```
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

</details>

### tsconfig.json
<details>
  <summary>Click to show/hide file contents</summary>

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```
</details>

### webpack.config.js
<details>
  <summary>Click to show/hide file contents</summary>

```
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

</details>

</details>

### tasks
<details>
  <summary>Click here to see the tasks</summary>

### Task 0: Creating an interface for a student
- Create an interface named `Student`.
- Define properties: `firstName`, `lastName`, `age`, and `location`.
- Store two student objects in an array `studentsList`.
- Render a table using Vanilla JavaScript.

### Task 1: Let's build a Teacher interface
- Create an interface `Teacher` with required and optional fields.
- Allow dynamic addition of properties to the interface.

### Task 2: Extending the Teacher class
- Extend the `Teacher` interface to create a `Directors` interface.
- Add the `numberOfReports` attribute to `Directors`.

### Task 3: Printing teachers
- Create a function `printTeacher` that returns a formatted string from the first and last names.

### Task 4: Writing a class
- Create a class `StudentClass` with methods for homework and name display.

### Task 5: Advanced types Part 1
- Create interfaces `DirectorInterface` and `TeacherInterface`.
- Implement the interfaces in respective classes and provide methods for work tasks.

### Task 6: Creating functions specific to employees
- Write functions `isDirector` and `executeWork` for conditional method execution.

### Task 7: String literal types
- Create a string literal type `Subjects` and a function `teachClass` to handle subject-specific logic.

### Task 8: Ambient Namespaces
- Create an ambient namespace to manage `RowID` and `RowElement` types.
- Implement `CRUD` operations using ambient declarations.

### Task 9: Namespace & Declaration merging
- Use declaration merging to extend a namespace with new class attributes and methods for different subjects (e.g., `Cpp`, `React`, `Java`).

### Task 10: Brand convention & Nominal typing
- Define two interfaces `MajorCredits` and `MinorCredits` and their summing functions with unique branding.

</details>

click on
