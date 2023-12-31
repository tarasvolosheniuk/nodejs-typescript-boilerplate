
# NodeJS TypeScript Boilerplate

This is the NodeJS TypeScript Enterprise-Ready Microservice Boilerplate. This boilerplate is designed with a strong emphasis on high-quality code and is suitable for use in enterprise-scale applications or production-intent solutions. Having 3 layer architecture in mind, this allows you to integrate libraries easily.

## API Overview
The API supports an endpoint `\GET` and expects to receive an integer number as input. The following describes the API's behavior

- If the integer is a multiple of 3, it will return 'G.'
- If the integer is a multiple of 5, it will return 'N.'
- If the integer is a multiple of both 3 and 5, then 'GN' will be displayed.
- If the input value is not an integer or not a number at all, it will return an error with a 400 status code and an appropriate message.
- Otherwise, the provided integer will be returned.
## Technology used
`Express` is being used as the framework, and the application infrastructure configuration consists of the following:

- `ECMA2022` features enabled
- `Dotenv` Load environment variables from .env file
- `Eslint` Code quality tool
- `Prettier` to prettify the code
- `Jest` Testing tool support
- `Logger` Logging support with Winston
- `Agenda` ready to emit events through agenda jobs
- `TypeDI` to implement dependency injector functionality
- `Routing-controllers` to create controller classes with methods as actions that handle requests
- `Joi` for object schema validation
## Folder Structure
        ├── src                     # Source files
        │   ├── api                     # API logic with controllers, services, data-access and middlewares
        │   ├── bin                     # Server configuration
        │   ├── errors                  # Custom errors
        │   ├── interfaces              # Sample interfaces
        │   ├── lib                     # Configuration logic for logging, jobs and DI
        │   └── utils                   # Sample utility classes
        ├── test                    # Base unit test to cover core functionality
        ├── .env.example            # An example .env file
        ├── jest.config.ts          # Jest configuration file
        └── .eslintrc.cjs           # Eslint configuration file
## Pre-requiste
- Typescript
- Node.js v18.x

## Getting Started
To start using this boilerplate, please begin by executing the `.env` copying command:
```bash
cp .env.example .env
```
Then proceed with these simple installation steps:

- To install all dependencies:
```bash
npm install
```
- To run the application in development mode:
```bash
npm run dev
```
-  To run tests:
```bash
npm test
```
- To run ESlint
```bash
npm run lint
```
- To run application in production mode:
```bash
npm run prod
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

