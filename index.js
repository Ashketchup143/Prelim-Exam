//npm init
//npm install express
//npm install nodemon
//after add this line in package.json / "serve": "nodemon index.js"
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.setHeader('Content-type', 'text/html')
    
    let myurl='./views/'
    if(req.url=='/'){
        myurl += 'home.html'
        res.statusCode=200
    }
    else if(req.url=='/about'){
        myurl+='about.html'
        res.statusCode=200
    }
    else if(req.url=='/portfolio'){
        myurl+='portfolio.html'
        res.statusCode=200
    }
    else if(req.url=='/uniquepage'){
        myurl+='uniquepage.html'
        res.statusCode=200
    }
    else{
        myurl+='error.html'
        res.statusCode=400
    }
    fs.readFile(myurl, (err,data) =>{
        if(err){
            console.log("I love you sykkkeeeee you ugly",err)
        }
        else{
            res.write(data)
            res.end()
        }
    })

    //manual
    // res.setHeader('Content-type', 'text/html')
    // res.write("Hello beach ima swim")
    // res.write("<p>sup people of the world</p>")
    // res.write("<p>its me john cena</p>")
    // res.write("<p>ting tining tiiinnnnngggg</p>")
    // res.end()
    // console.log(req.url.toString())

})

server.listen(3000, 'localhost', () => {
    console.log("listen to the song here in my heart")
})