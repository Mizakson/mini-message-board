const express = require("express")
const path = require("node:path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs") 

const indexRouter = require("./routes/index")
// const newRouter = require("./routes/new")

app.get("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board: port - ${PORT}`)
})