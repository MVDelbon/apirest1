const {Router} = require('express');
const router = Router();

router.get('/test', (req, res) =>{
    const data = {
        "name": "Toti",
        "gmail": "totidelbon2@gmail.com"
    }
    res.json (data);
} );

module.exports = router;