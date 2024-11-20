const express = require("express")
const app = express()



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("...")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})