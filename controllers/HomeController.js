const router = require('express').Router();

// Adiciona rota index
router.get('/Home', async (req, res) => {
    try {
        res.render('Home/index', {message:''});
    }
    catch (err) {
        console.error(err)
    }
});


module.exports = router;