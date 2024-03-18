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


let name="ex battalion music"
app.get('/', function (req, res) {
    res.render('home',{heading: name, song: "hatdog"});
//   res.sendFile('./views/home.html', { root: __dirname})
})

let a="Name: Ashley Noel M. Lim"
let b="Education: Currently pursuing a Bachelor of Science in Information Systems at Ateneo de Davao University"
let c="Interests: Enjoys exploring various cuisines and delights in the pleasures of food. Also holds a strong spiritual connection and finds solace and joy in faith and devotion to God."
let d="Personality: Radiates happiness and contentment in her own unique way, embracing life with positivity and optimism."
let e="Desire: Wishes to connect with others and foster friendships."
let f="Meet Ashley Noel M. Lim, a vibrant student currently pursuing a Bachelor of Science in Information Systems at Ateneo de Davao University. With a passion for both exploring the diverse world of cuisine and nurturing his spiritual connection with God, Ashley embodies a blend of culinary curiosity and profound faith. His infectious happiness and unwavering positivity illuminate his journey, as he eagerly embraces each day with a heart full of gratitude and a desire to connect with others. With his warm demeanor and welcoming spirit, Ashley invites you to join his in the delightful journey of friendship and shared experiences."
let img="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/240525583_4593098317399941_4698934283417746461_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFk9hTMX1wRcGIirHogCefugdfmN12jm3qB1-Y3XaObeuNw-OaNXFulgyCc21irRzuEFUE1PffMKMe-A37WpAzg&_nc_ohc=ESEjJylmb14AX8_Fq5w&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfCt3BKQiu3nOHlKaBdvLinsSp7030IvdxKdz9B84wIC5w&oe=65FDCF8A"
app.get('/about', function (req, res) {
    res.render('about',{a:a,b:b,c:c,d:d,e:e,f:f,img:img} );
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