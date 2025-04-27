import http from "http"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const response = {
        name: "shacks",
        carrier: "developer"
    }
    res.end(JSON.stringify(response))
})

server.listen(PORT, ()=>{
    console.log(`The server is now running at the port ${PORT}`)
})