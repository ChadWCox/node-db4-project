
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'German Pancakes'},
        {recipe_id: 2, recipe_name: 'Vegtable tray'},
      ]);
    });
};
