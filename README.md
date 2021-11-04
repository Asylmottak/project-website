# Steinan Projects

## Run

Before running the project, make sure to insert the needed .env file containing auth0 credentials and database url

<pre>
  npm i
  npm run dev
</pre>
<br>

## Scripts

### `npm run dev`

- Starts the server in development mode

### `npm run format`

- Formats all files in the project to comply with eslint & prettier rules

### `npm run prisma-push`

- Pushes changes made to prisma's database schema
- This generates or updates tables if schamas are created or updated respectively

### `npm run prisma-studio`

- Opens up prisma's database GUI
- In the GUI you can modify all data within the database

## Deployment

Every push to master automatically deploys the new version to Heroku.
