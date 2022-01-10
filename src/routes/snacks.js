const { Router } = require('express');
const router = Router();
const knex = require('../knex');

router.get('/', async (req, res) => {
    const response = await knex.select('*').from('snacks');
    res.json(response);
});

router.post('/new', async (req, res) => {
    const respose = await knex('snacks').insert({name: req.body.name});
    res.json(respose)
})

module.exports = router;