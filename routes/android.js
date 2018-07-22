const Android = require('../models/android')


module.exports = (router) => {
    router.get('/newAndroid', (req, res) => {
        res.send('Android')
    })

    return router
}