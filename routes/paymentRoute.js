const express = require('express');
const router = express.Router();
const controller = require('../controllers/paymentController');

router.post('/payment', controller.sendPayment);

module.exports = router;