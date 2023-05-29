const express = require('express')
const app = express()
const port = 30000

const handlebars = require('express-handlebars')
const {engine} = require('express-handlebars')

fruits = () => {
    return [{
        'name': 'apple',
        'color': 'green'
    }, {
        'name': 'lime',
        'color': 'green'
    }, {
        'name': 'banana',
        'color': 'yellow'
    }, {
        'name': 'peach',
        'color': 'orange'
    }, {
        'name': 'plume',
        'color': 'purple'
    }, {
        'name': 'blueberry',
        'color': 'purple'
    },]
}

app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index'
}))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main', {'fruit_basket': fruits(), basket: true})
})

app.listen(port, () => {
    console.log(`App is listens to port ${port} on http://localhost:${port}`)
})
