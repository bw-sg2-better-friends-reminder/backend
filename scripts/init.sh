rm db/dev.sqlite
knex migrate:latest &&
# knex seed:run