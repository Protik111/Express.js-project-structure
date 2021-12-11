const router = require('express').Router();

router.get('/health', (_req, res) => {
    //throw new Error('There is a Error'); //server created error
    return res.status(200).json({
        message: 'Success'
    });
});

module.exports = router;