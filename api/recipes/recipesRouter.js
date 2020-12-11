const express = require('express');
const Recipes = require('./recipesModal');
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(e => {
            res.status(500).json({ message: 'Failed to get recipes.'})
        });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params
    Recipes.getShoppingList(id)
        .then(shoppingList => {
            res.status(200).json(shoppingList)
        })
        .catch(e => {
            res.status(500).json({ message: 'Failed to get recipe shopping list.'})
        });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
        .then(instructions => {
            res.status(200).json(instructions)
        })
        .catch(e => {
            res.status(500).json({ message: 'Failed to get recipe instructions.'})
        })
});

module.exports = router;