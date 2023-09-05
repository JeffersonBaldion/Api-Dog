const {conn} = require('./db')
const server = require('./app')
const getTemperaments = require('./controllers/getTemperaments')
const PORT = proccess.env.PORT || 3001



server.listen(PORT, ()=>{
    conn.sync({force: false})
    console.log(`Server running on port ${PORT}`)
})


// conn.sync({alter: true}).then(async() => {
//     await getTemperaments()
//     server.listen(PORT, ()=>{
//         console.log(`Server running on port ${PORT}`)
//     })
// })