const express = require("express")
const app = express()

const indexRouter = require("./routes/index")
// const newRouter = require("./routes/new")

app.get("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board: port - ${PORT}`)
})