const { Router } = require('express');
const router = Router();
const desserts = require('../sample.json');

router.get('/', (req, res) => {
    res.json(desserts);
});

module.exports = router;