## Run in your local

Prerequisites:

1. PostgreSQL
2. NodeJS + NPM

Step-by-step:

1. Create `.env` file, copy and fill the value below with your port and postgreSQL configuration.

```
PORT=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_PORT=
```

2. Run `npm run setup` for create new table in your database.
3. Run `npm run seeder` for insert some dummy data. **This is optional step, you can skip it if you want**.
4. Run `npm run tsc` for compile typescript file to javascript.
5. Run `npm run dev` and simple todo list ready to use in your local.
