const express = require("express")
const path = require("node:path")
const app = express()

app.use(express.urlencoded({ extended: true }))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const indexRouter = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")

app.use("/", indexRouter)
app.use("/new", newMessageRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board: port - ${PORT}`)
})