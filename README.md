## PNW Hikers Group

#### _By Megan Warnock_

### Description

This application is designed for members who love to hike in the beautiful Pacific Northwest. Users can post about hikes they have done and display details and hiker contact information.

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)

You will also need a Firebase account to set up a database:
`https://firebase.google.com/`

### Installation

In your terminal run these commands:
* `git clone https://github.com/warnock/pnw-hicker-group.git`
* `cd pnw-hicker-group`
* `npm install`
* `bower install`


## Database Configuration
  * Create a new project in your Firebase account
  * Create a new api-keys file in your project directory:
  `touch src/app/api-keys.ts`
  * From the Firebase overview page in your new project click the "add Firebase to your web app" button.
    * Copy the config values
  * Past the copied config values from Firebase into your api-keys file like this:

    ```
    export var masterFirebaseConfig = {
      apiKey: "YOUR FIREBASE VALUE HERE",
      authDomain: "YOUR FIREBASE VALUE HERE",
      databaseURL: "YOUR FIREBASE VALUE HERE",
      projectId: "YOUR FIREBASE VALUE HERE",
      storageBucket: "YOUR FIREBASE VALUE HERE",
      messagingSenderId: "YOUR FIREBASE VALUE HERE"
    };
    ```

### Running / Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Support or contact details

Contact Megan at megandwarnock@gmail.com if any questions.

### License

Copyright (c) 2017 **_MIT License_**
