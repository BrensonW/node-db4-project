const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
    return cleaner.clean(knex, {
        mode: 'truncate', // this resets the ids
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // Do not empty migration tables
    });
};