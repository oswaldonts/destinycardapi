var express = require('express');
var router = express.Router();

const ItemController = require('../controllers/ItemController');

/* GET users listing. */
// router.get();
router.get('/items', ItemController.index);

router.post('/items', ItemController.store);

module.exports = router;
