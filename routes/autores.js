var express = require('express');
var router = express.Router();

var controller = require('../controllers/autorApiController')

router.get('/', controller.all);
router.get('/:id', controller.getById);
router.post('/', controller.add);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;