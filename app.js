const express = require("express")
const path = require("node:path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs") 
app.use(express.urlencoded({ extended: true }))

const indexRouter = require("./routes/index")

app.get("/", indexRouter)
app.get("/new", (req, res) => {
    res.render("form")
})

app.post("/new", (req, res) => {
    msg = req.body.msg
    user = req.body.user
    messages.push({ text: msg, user: user, added: new Date(), })
    res.redirect("/")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`mini message board: port - ${PORT}`)
})