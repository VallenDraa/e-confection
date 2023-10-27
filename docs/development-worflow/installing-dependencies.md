# Installing Dependencies

To fully install the dependencies, there are three steps that you must follow which are:

1. Installing the backend dependencies
2. Installing the frontend dependencies
3. Installing dependencies for CI/CD and pre-commit hooks

## Before Getting Started

This project requires `typescript@5.0.2` and a minimum of `node@20.x.x`. You can install node.js on your machine by following this [installation guide from nvm](https://github.com/nvm-sh/nvm).

Once finished, we can go ahead and install typescript in our machine by simply typing `npm install -g typescript@5.0.2` in your machine's terminal.

## Backend Dependencies

If you have finished the node and typescript installation, we can install the backend dependencies by opening a terminal at the root of the project and typing `cd backend && npm install`.

If you take a look at the backend folder, there will be a `.env.example` which is the schema of the actual env file that'll be used to store sensitive information in development.

You can then create a `.env` on the backend folder and copy the contents of the `.env.example` to it. Once done you'll need to fill it according to your condition.

## Frontend Dependencies

You will need to cd into the frontend folder from the root of the project and type npm install in the terminal.

## CI/CD and pre-commit hooks dependencies

You will need to go to the root of the project and type npm install in the terminal.

## Next Step

Once the dependencies are all installed you can read the [getting started with development](getting-started-with-development.md) module.
