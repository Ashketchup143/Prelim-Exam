const fullname =["juand dela cruz", "James Reid", "Michael MAyers"]

const students=[
    {name:fullname[0], age: 18, course:"IT"},
    {name:fullname[1], age: 12, course:"DS"},
    {name:fullname[2], age: 32, course:"Is"},
]

const hello= function(name="Cardo"){
    return(`Hello ${name}`)
}

module.exports={fullname,students,hello}