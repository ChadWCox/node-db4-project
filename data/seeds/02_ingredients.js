
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'eggs'},
        {ingredient_id: 2, ingredient_name: 'milk'},
        {ingredient_id: 3, ingredient_name: 'salt'},
        {ingredient_id: 4, ingredient_name: 'butter'},
        {ingredient_id: 5, ingredient_name: 'AP flour'},
        {ingredient_id: 6, ingredient_name: 'carrots'},
        {ingredient_id: 7, ingredient_name: 'celery'},
        {ingredient_id: 8, ingredient_name: 'mini dill pickles'},
        {ingredient_id: 9, ingredient_name: 'cauliflour'},
        {ingredient_id: 10, ingredient_name: 'Hidden Valley Ranch Dip'},
      ]);
    });
};
