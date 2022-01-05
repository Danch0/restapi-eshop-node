const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "restapi eshop",
        "website": "desserts & snacks do it"
    };
    res.json(data);
});

module.exports = router;