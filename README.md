# Angular Libreries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development library

Run `ng generate library` for a dev libreries. The app will automatically create files.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Angular libreries.

    .
    ├── node_modules
    └── projects
        └── ngr-table
            └── src
                └── lib
                      ├── ngr-table.component.ts
                      ├── ngr-table.module.ts
                      └── ngr-table.service.ts
                ├── public-api.ts
                └── test.ts
            ├── ng-package.json
            └── package.json
    ├── src
    └── README.md

1. **`package.json`**: Here you changes name, version and other of the library. In the part of peerDependencies are the libreries that our library needs (material, bootstrap, etc).

2. **`public-api.ts`**: Which files are exported so that users can use our library.

3. **`README.md`**: A text file containing useful reference information about your project.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

