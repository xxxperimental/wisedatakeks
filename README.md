# WiseDataKeks
This project is a starting point for a wise app for a wise guy.

<img src="https://github.com/xxxperimental/wisedatakeks/blob/master/wisedatakeks_logo.png" width="200" height="200" />

Initial boilerplate code from https://github.com/covalence-io/barebones-react-typescript-express.

There are 2 different Webpack configurations. One for the server and one for the client.

## Server
The server build process compiles the TypeScript files found in `/src/server` into a single bundled JavaScript file located in the `/dist` directory.

## Client
The client build process compiles the React app located in `/src/client` into a bundled located at `/public/js/app.js`.

The client configuration will also build the Sass files found at `/src/client/scss`. The App component imports the `app.scss` file which already includes an import for Bootstrap.

## Running the project
In order to run the server, use `npm run dev`, and the server will start on port 4000 (http://localhost:4000). 

Webpack will watch the files. Once you save a file, you can refresh your browser to ensure you got the updated client files. If you only change server files, you *shouldn't* need to refresh.
