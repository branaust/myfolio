const port = 3000
const express = require('express')
const app = express()
const path = require('path')



app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
    res.render('index.html')
})


app.listen(port, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log(`server listening on port ${port}`)
    }
})