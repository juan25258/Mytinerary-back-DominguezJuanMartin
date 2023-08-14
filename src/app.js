const express = require("express")
const router = require("./router/router")

const app = express()

app.use("/api",router)





app.listen(8080, ()=>{
    console.log("listening on port 8080")
})