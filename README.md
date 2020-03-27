# Taskbox
This project uses CRA and Storybook to implement todo functionality using component driven development methedology. It also uses jest to for component testing. 
## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app taskbox
```

In order to install story book, run the following command. 
```
npx -p @storybook/cli sb init
```

In order to start various environments of the application, run the following commands

```
# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 9009:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start

```

This project uses redux to build a simple data model.

```
yarn add react-redux redux
```