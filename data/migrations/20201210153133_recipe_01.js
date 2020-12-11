const { table } = require("../db-config");

exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id')
        tbl.text('recipe_name', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id')
        tbl.text('ingredient_name', 128).notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id')
        tbl.text('directions').notNullable()
        tbl.integer('step_order').notNullable()
        tbl.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('measurements', tbl => {
        tbl.increments('id')
        tbl.integer('ingredient_id')
            .unsigned().notNullable()
            .references('ingredient_id').inTable('ingredients')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        tbl.string('ingredient_amount', 128).notNullable()
        tbl.integer('step_id')
            .unsigned().notNullable()
            .references('step_id').inTable('steps')
            .onDelete('RESTRICT').onUpdate('RESTRICT')
        tbl.integer('recipe_id')
            .unsigned().notNullable()
            .references('recipe_id').inTable('recipes')
            .onDelete('RESTRICT').onUpdate('RESTRICT')

    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('measurements')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
