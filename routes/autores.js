var express = require('express');
var router = express.Router();

var controller = require('../controllers/autorApiController')

router.get('/', controller.all);
router.get('/:id', controller.getById);
router.post('/', controller.add);

module.exports = router;