exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
        tbl.increments();
        tbl.string('userName').notNullable();
        tbl.string('email').notNullable();
        tbl.string('firstName').notNullable();
        tbl.string('lastName').notNullable();
        tbl.string('password').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
