const { Router } = require('express');
const router = Router();
const desserts = require('../sample.json');
const dessertsDB = require('../sample.json');
const knex = require('../knex');

router.get('/', async (req, res) => {
    const response = await knex.select('*').from('desserts');
    res.json(response);
});

router.post('/new', async (req, res) => {
    const respose = await knex('desserts').insert({name: req.body.name});
    res.json(respose)
})

module.exports = router;