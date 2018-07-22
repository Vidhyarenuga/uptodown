const Windows = require('../models/windows')


module.exports = (router) => {
    router.get('/', (req, res) => {
        res.send('Windows')
    })

    return router
}