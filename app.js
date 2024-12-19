const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

const { indexRouter, messages } = require("./routes/indexRouter")
const { newMessageRouter } = require("./routes/newMessageRouter")

app.use("/", indexRouter)
app.get("/new", newMessageRouter)
app.post("/new", newMessageRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})