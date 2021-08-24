
const router = require('express').Router();
const contactSubmit = require('../controllers/contactController')

// router.post('/contactForm', contactSubmit)

router.post('/contactForm', contactSubmit);

module.exports = router;