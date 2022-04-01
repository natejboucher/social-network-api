const router = require('express').Router();
const apiRoutes = require('./api/index')

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> Oops! 404 Error! You lost your way.');
});

module.exports = router;