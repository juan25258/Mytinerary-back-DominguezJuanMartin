const express = require("express")
const router = require("./router/router")
require("./config/database")

const app = express()

app.use(express.json())

app.use("/api",router)





app.listen(8080, ()=>{
    console.log("listening on port 8080")
})