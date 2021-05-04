# Angular Development

> Run `npm install` before you get started. 

> Libraries and applications are both called projects. When you are generating a schematic for a project, use the --project flag. Otherwise, it will generate it under the default project. The default project can be changed to any project of your choosing in angular.json.

## Generate an application

Run `ng g application <your-app-name>` to generate an application.

## Apply Material Theme to your application

Run `ng add @angular/material` which will add fonts, styles, required packages, use prebuilt theme, and add global styles.

## Generate a Material Library

Run `ng g library <your-library-name>` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@examples/<your-library-name>`.

An Angular library generates a module which can be used for any angular schematic, ie: Services, Components. Use 'angular:lib' for angular specific code. Use 'workspace:lib' for framework agnostic typescript code. 

# Generate a Typescript Library

Run `ng g @nrwl/workspace:lib types` to generate a library without an angular module.

Given that you named your library 'types', then this will generate a file named 'types.ts'. This types.ts is used for exporting all the shareable interfaces. Its a simpler approach to creating shareable interfaces. This can generator can be used for constants or utility typescript functions. Basically, you use workspace:lib for framework agnostic typescript.  

# Angular Schematics

> Any schematic available in the Angular CLI (see https://angular.io/cli/generate) can be used, simply use the --project option to specify where the schematic should live. 

## Generate an Angular Component 

Run `ng g component <your-component-name> --project=<your-library-name> --export` to generate an angular component. This will generate the component and add it to your angular library module. 

To use this component in your application, import your library module to your application module, ie: `import { <your-library-name>Module } from '@examples/<your-library-name>';`. The component's selector should now be available.

## Generate an Angular Service

Run `ng g service user --project=<your-library-name>` to generate an angular service. Then add this line to src/index.ts `import * from './lib/user.service';`, and import the new service to the angular library module.

To use this service in your application, import your library module to your application module, ie: `import { <your-library-name>Module } from '@examples/<your-library-name>';` Then in your application's component or other service import the serice, ie: `import { UserService } from '@examples/<your-library-name>';`. 

## Scaffold a Material Component Schematic 

[Material Schematics](https://material.angular.io/guide/schematics)

> Before, you must run `ng add @angular/material`. See Apply Material Theme above. 

Run `ng g @angular/material:navigation <component-name>` to generate a navigation component.

Run `ng g @angular/material:address-form <component-name>` to generate an address form component.

# Create a new example in Rxjs Pipelines App

## Generate a Component



# Nx Workspace Commands

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Look inside angular.json, "defaultProject": "employeeportal". defaultProject will indicate which application gets served or built when you do not specify the application. `ng serve` will simply serve the default project.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.


## Quick Start & Documentation

[Angular Documentation](https://angular.io/docs)

[Nx Angular Documentation](https://nx.dev/latest/angular/getting-started/intro)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Nx Examples App](https://github.com/nrwl/nx-examples)

[Nx Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

[Nx Community Plugins](https://nx.dev/nx-community) you could add.

# Starting a New Nx Workspace

Run `npx create-nx-workspace@latest` to scaffold the nx workspace. Follow the prompts.

1. Workspace name is for example the organization name, ie: `myorg` or the global namepspace of the environment, ie: `examples`.
2. What to create in the new workspace? Framework of the first application.
3. Application name? Name of the first application.
4. and so on...

# ☁ Nx Cloud

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Visit [Nx Cloud](https://nx.app/) to learn more.

