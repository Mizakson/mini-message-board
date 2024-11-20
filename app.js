const express = require("express")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

const { indexRouter, messages } = require("./routes/indexRouter")

app.use("/", indexRouter)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})