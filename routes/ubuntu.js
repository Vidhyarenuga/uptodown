const Ubuntu = require('../models/ubuntu')


module.exports = (router) => {

    router.get('/new', (req, res) => {
        res.send('Ubuntu')
    })

    return router
}