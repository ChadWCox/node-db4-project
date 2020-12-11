const db = require('../../data/db-config');

module.exports = {
   getRecipes() {
       return db('recipes')
   },
    getShoppingList(recipe_id) {
        return db('measurements as m')
        .join('ingredients as i', 'i.ingredient_id', 'm.ingredient_id')
        .join('recipes as r', 'r.recipe_id', 'm.recipe_id')
        .select('r.recipe_name', 'i.ingredient_name', 'm.ingredient_amount')
        .where('r.recipe_id', recipe_id)
   },
    getInstructions(recipe_id) {
        return db('steps as s')
        .join('recipes as r', 'r.recipe_id', 's.recipe_id')
        .select('r.recipe_name', 's.step_order', 's.directions')
        .where('s.recipe_id', recipe_id)
        .orderBy('s.step_order', 'asc')
    }      
};