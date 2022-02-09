# Blogger Test
The backend of the system is a REST API made with **Laravel PHP Framework**.
It can be consumed with any front-end mobile app, SPA, e.t.c. Authentication of the REST endpoints is done with stateless tokens and Laravel Passport. 

## Setup Instructions
Git clone and navigate into the project directory. **PHP 7.4** or higher is required.

Copy the `.env.example` file to a `.env` file and update your **database** and **redis** credentials in the respective environment variables:
```bash
copy .env.example .env
```

Install the PHP project dependencies with `composer`:
```bash
composer install
```

Create the `.env.testing` file and update the test database name and credentials respectively:
```bash
copy .env.example .env.testing
```

Set up the local project, generate app key, migrate database, and insert some dummy data, generate laravel passport keys:
```bash
php artisan blog:dev-setup
```

Serve the app:
```bash
php artisan serve
```

Credentials for the dummy admin user created in the database: 

``email: admin@blogger.test``

``password: 123Secret``

To run automated tests for the backend API, you can use the composer script command defined in the `composer.json` file:
```bash
composer test-unit
```

You may also use the Laravel artisan command to run automated tests:
```bash
php artisan test
```
### Further configurations
The blog can be populated with posts fetched from a third party API. A command to fire the job that imports the posts has been implemented. It has been set up with <a href="https://laravel.com/docs/8.x/scheduling"> laravel scheduler</a>, however, you will need to set up crontab to keep the scheduler running and importing the posts every 2 hours. You can manually run the command to import the posts with the command: 
```bash
php artisan blog:posts-import
```

### Blog UI
The front end is made with **Vue** (Utilizing **Quasar** Components). The Vue files are in a directory called `blog_ui` within the Project's root. 

This front end is standalone and can be served separately. 
However, we will be utilizing the laravel server to serve the single page app. We build the Vue files using Vue CLI and copy them to laravel resources using laravel mix. You can find more dev info in the `blog_ui/README.md` file. 

First install the laravel npm dependencies within the project root:
```bash
npm install
```


Navigate into the `blog_ui` directory and install the npm dependencies. **Node.js >=12.22.1** is required:
```bash
cd blog_ui
```

Install dependencies with `yarn`: 
```bash
yarn
```

Also install the Quasar cli npm package globally since it's used to build the project:
```bash
npm install -g @quasar/cli
```

Build the project: 
```bash
yarn build
```

Navigate back into the project root once the build completes:
```bash
cd ..
```

Copy the built files into laravel resources. This command executes the laravel mix command defined in the `webpack.mix.js` file:
```bash
npm run production
```

Serve the app and visit the development server URL:
```bash
php artisan serve
```

Thank you for trying!
