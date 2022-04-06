var express = require('express');
var router = express.Router();

const InventoryItemController = require('../controllers/InventoryItemController');

/* GET users listing. */
router.get('/', InventoryItemController.index);

router.post('/', InventoryItemController.store);

module.exports = router;
