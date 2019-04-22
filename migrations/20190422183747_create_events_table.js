exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', (tbl) => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.date('date').notNullable();
        tbl.string('message').notNullable();
        tbl.integer('categoriesId').unsigned().references('id').inTable('categories').notNullable();
        tbl.integer('friendsId').unsigned().references('id').inTable('friends').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('events');
};
