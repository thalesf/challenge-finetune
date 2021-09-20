# Finetune Challenge

## Food Count

Create a web app where the user has a list of everything she eats and the amount. <br />
:white_check_mark: 1 - The user should be able to add items to the list.<br />
:white_check_mark: 2 - The items are organized by day.<br />
:white_check_mark: 3 - The user can filter items by date.<br />
:white_check_mark: 4 - Each food item can have a type: Protein, Fat, or Carbohydrate.<br />
:white_check_mark: 5 - User can see a graph on the top of the list with the Item type distribution(Protein, Fat, or Carbohydrate).<br />
:white_check_mark: 5.1 - For the backend please create a way to get data for the graph.<br />
:white_check_mark: 5.2 - For the frontend please create a way to display the graph.<br />
:white_check_mark: 6 - Here in Finetune we are huge fans of tests especially TDD, so it's strongly recommended to implement the features using TDD and adding the tests first on the commit, this is optional.<br />
:white_check_mark: 7 - The user can delete items from the list.<br />
This test has a lot of features on purpose, you should feel free to choose the ones you think will make the most impact on the user and showcase your skills.<br />

## Project details

    .
    ├── cypress                 # Automated tests(cypress)
    ├── src                     # source code
       |___ components          # application components
       |___ context             # Contexts 
       |___ hooks               # Hooks
            |___tests__         # Hooks tests (react testing library)
       |___ pages               # application pages
            |___ home           # Initial Page
       |___ utils               # Utilities functions
            |___tests__         # Utilities tests (react testing library)

## Stack

**Typrescript** - https://www.typescriptlang.org/ <br />
**Material UI** - https://mui.com/ <br />
**Cypress** - https://www.cypress.io/ **(Integration tests)** <br />
**React Testing Library** - https://testing-library.com/ **(Unit tests)** <br />
**Conventional Commits** - http://conventionalcommits.org/ **(commits specification)**<br />

## :zap: Usage

### Use bash

```bash
$ git clone https://github.com/thalesf/challenge-finetune.git
$ cd challenge-finetune
$ npm install or yarn
$ npm start or yarn start
# visit http://localhost:3000
```

### Run tests
```bash
$ npm test or yarn test
```
### Run on browser
```bash
$ start the project(port 3000)
$ run test:cypress
$ choose the test
```

## Description

### Frontend Challenge
Please use React or NextJS.
There are no contains on libraries.
TypeScript is a plus.
Your focus is on the UI and not on the backend.
Any API is a plus.

### Backend Challenge
Please use Python (Django, Flask, or Chalice)
Hasura is a plus
Your focus is on the backend and not on the UI.
Any UI is a plus.


The goal is to demonstrate how organized and structure your code is.
Please put your code in a repository and share it with me.
