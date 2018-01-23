// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyD45Fl0ujG-iOw5vNzCL-eLUA9S7PdLOXI",
        authDomain: "angular5-firebase-crud.firebaseapp.com",
        databaseURL: "https://angular5-firebase-crud.firebaseio.com",
        projectId: "angular5-firebase-crud",
        storageBucket: "angular5-firebase-crud.appspot.com",
        messagingSenderId: "72557190907"
    }
};
