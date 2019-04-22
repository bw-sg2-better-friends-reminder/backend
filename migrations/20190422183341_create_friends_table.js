exports.up = function(knex, Promise) {
    return knex.schema.createTable('friends', (tbl) => {
        tbl.increments();
        tbl.string('firstName').notNullable();
        tbl.string('lastName');
        tbl.integer('phone').notNullable();
        tbl.integer('userId').unsigned().references('id').inTable('users').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('friends');
};
