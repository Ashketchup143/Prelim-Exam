const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port= 3000;

app.use((req, res, next)=>{
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
    res.render('home',{heading: "ex battalion music", song: "hatdog"});
//   res.sendFile('./views/home.html', { root: __dirname})
})

app.get('/about', function (req, res) {
    res.render('about');
    // res.sendFile('./views/about.html', { root: __dirname})
})

app.get('/portfolio', function (req, res) {
    res.render('portfolio');
    // res.sendFile('./views/portfolio.html', { root: __dirname})
})

app.get('/uniquepage', function (req, res) {
    res.render('uniquepage');
    // res.sendFile('./views/uniquepage.html', { root: __dirname})
})

app.get('/home',(req,res)=>{
    res.redirect('/')
})

app.get('/aboutus',(req,res)=>{
    res.redirect('/about')
})

app.use((req,res)=>{
    res.status(404).sendFile('./views/error.html', { root: __dirname})
})
app.listen(port, ()=>{
    console.log(`Server  is running on port ${port}`)
});