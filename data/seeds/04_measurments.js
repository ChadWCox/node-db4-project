
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {id: 1, ingredient_id: 1, ingredient_amount: '6', step_id: 2, recipe_id: 1},
        {id: 2, ingredient_id: 2, ingredient_amount: '1 cup', step_id: 2, recipe_id: 1},
        {id: 3, ingredient_id: 3, ingredient_amount: '1 tsp', step_id: 2, recipe_id: 1},
        {id: 4, ingredient_id: 4, ingredient_amount: '1 stick or 1/2 cup', step_id: 2, recipe_id: 1},
        {id: 5, ingredient_id: 5, ingredient_amount: '1 cup', step_id: 2, recipe_id: 1},
        {id: 6, ingredient_id: 6, ingredient_amount: '4 to 6', step_id: 1, recipe_id: 2},
        {id: 7, ingredient_id: 7, ingredient_amount: '4 to 6', step_id: 1, recipe_id: 2},
        {id: 8, ingredient_id: 8, ingredient_amount: '1 jar', step_id: 1, recipe_id: 2},
        {id: 9, ingredient_id: 9, ingredient_amount: '1 head', step_id: 1, recipe_id: 2},
        {id: 10, ingredient_id: 10, ingredient_amount: '1 container', step_id: 1, recipe_id: 2}
      ]);
    });
};
