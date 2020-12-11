
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {step_id: 1, directions: 'Start by preheating oven to 425° Fahrenheit or 218° Celsius.', step_order: 1, recipe_id: 1},
        {step_id: 2, directions: 'Gather the recipe ingredients ensureing you have enough, and set aside.', step_order: 2, recipe_id: 1},
        {step_id: 3, directions: 'In a rectangle cake pan or pirex place cubed butter and place in the oven to melt.', step_order: 3, recipe_id: 1},
        {step_id: 4, directions: 'In a large bowl or blender mix the milk, flour, eggs, and salt.', step_order: 4, recipe_id: 1},
        {step_id: 5, directions: 'Carefully pour the ingredients into the butter pan.', step_order: 5, recipe_id: 1},
        {step_id: 6, directions: 'Bake for 20 minutes or untils the edges are golden brown.', step_order: 6, recipe_id: 1},
        {step_id: 7, directions: 'Gather the indgredients and wash with cool clean water and pat dry with a paper towel or clean cloth.', step_order: 1, recipe_id: 2},
        {step_id: 8, directions: 'Using a peeler carefully peel the carrots.', step_order: 2, recipe_id: 2},
        {step_id: 9, directions: 'Using a chef knife cut length wise the carrots and celery into cm size sticks.', step_order: 3, recipe_id: 2},
        {step_id: 10, directions: 'Cut the carrots and celery across and divide them into even managable sticks.', step_order: 4, recipe_id: 2},
        {step_id: 11, directions: 'In a rectangle cake pan or pirex place cubed butter and place in the oven to melt.', step_order: 5, recipe_id: 2},
        {step_id: 12, directions: 'Carefully divide the caulifour into bite size flourettes with the chef knife.', step_order: 6, recipe_id: 2},
        {step_id: 13, directions: 'Remove pickles from the jar and pat dry with a paper towel or clean cloth.', step_order: 7, recipe_id: 2},
        {step_id: 14, directions: 'Place all ingredients seperated on a tray and place a bowl or dish of ranch dressing in the center and serve.', step_order: 8, recipe_id: 2}
      ]);
    });
};
