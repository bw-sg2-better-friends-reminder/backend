exports.up = function(knex, Promise) {
    return knex.schema.createTable('categoriesUsers', (tbl) => {
        tbl.increments();
        tbl.integer('usersId').unsigned().references('id').inTable('users').notNullable();
        tbl.integer('categoriesId').unsigned().references('id').inTable('categories').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('categoriesUsers');
};
