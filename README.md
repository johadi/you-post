**YouPost** is an Application where registered users send notifications to one another via groups they belong to. It involves In-App, Email and SMS notification methods. Everything about this application is detailed below:
  
## Application Features

- [X] Sign up for the system
- [X] Login with your credentials
- [X] Create group
- [X] Search and add other registered users to groups you joined
- [X] Send messages to groups you joined
- [X] Read messages sent by other users from your message board
- [X] Receive Email notifications if urgent messages are sent to groups you joined
* Receive SMS and Email notifications if critical messages are sent to groups you joined
* Read all messages available in the groups you joined
- [X] View list of all groups you joined
- [X] View list of members in a particular group you joined
- [X] Logout of the application any time you wish
* Reset password if forgotten

## Technology Stack

#### Backend
- [Node js](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express js](http://expressjs.com/) handles backend routing.
- [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations and many more.
- [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
#### Frontend
- [Bootstrap](https://getbootstrap.com/) makes styling responsive web pages faster and easier.
- [NgRx](https://github.com/ngrx) JavaScript Library for implementing Redux pattern in Angular applications. 
- [Angular](https://angular.io) A JavaScript Framework for developing client side applications.

## Installation on development
This installation guide is for development purpose. For production, check the next section which is `Installation on production`

-   Install [Node js](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/) on your machine
-   Clone the repository `git clone https://github.com/johadi/you-post.git`
-   Change into the directory `cd /you-post`
-   Install all required dependencies with `npm install`
-   For easier accessibility, Install sequelize-cli globally for database migrations `npm install -g sequelize-cli`
-   Create a `.env` file in your root directory and follow the pattern in the .env.sample file to create environmental variables
-   Migrate your database by running this command `npm run migrate`
-   You can undo your migrations by running this command `npm run migrate:undo`.
-   Open a terminal and run `npm run build:watch` to build the application client side in watch mode.
-   Open another terminal and run `npm run start:dev` to boot the application.
-   Navigate to `localhost:3000` on your browser to open the application (use your port if you defined `PORT` variable in `.env` file)

## Installation on production
This installation guide assumes you are using heroku for your deployment. However, If you are using another platform, you can check the `package.json` and adjust the neccesary scripts to suit your platform.

-   Check Heroku deployment guide to use either of the two ways to deploy the application to heroku. Link here [Heroku Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs) .You could use Heroku CLI or Heroku Dashbaord.
-   In either ways you use, ensure you set up your Postgres database and add all the required enviromental variables using the pattern in the `env.sample` file in the project.
-   The scripts for Heroku to deploy the application has already been set up. All you will likely need is to set up the database, add environmental variables and then push the code to Heroku using Heroku CLI or Connect Heroku to your Github version of this project using the Heroku dashboard.
 If you follow this guide, the application should be live.



## Testing
-   Use separate DB's for testing and development as shown in the .env.sample file
-   Run server-side test with `npm test:server`
-   Run client-side test with `npm run test`
-   Run e2e test with `npm run e2e`
## Limitations of the project
  * User's logged in session expires when the browser is closed.
  * Users cannot create account with same username or email if already used.
  * Users cannot add themselves to other groups they don't belong. They can only be added by other registered users that are already member of the group.
  
## Note
  - Some of the features outlined above are not fully implemented as the project is in active development.
  - Keep visiting to see the progress of the application in the checked list

## Want to Contribute ?
  * Fork the repository
  * Make your contributions
  * Make sure your work is well tested
  * Create Pull request.
  
## License
MIT
