const path = require('path')
module.exports = {
    resolve: {
        alias: {
            'styled-components': path.join(__dirname, 'sc-alias.js'),
        }
    }
}
