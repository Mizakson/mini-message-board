const { Router } = require("express")
const newMessageRouter = Router()

newMessageRouter.get("/new", (req, res) => {
    res.render("form")
})

newMessageRouter.post("/new", (req, res) => {
    msg = req.body.msg
    user = req.body.user
    messages.push({ text: msg, user: user, added: new Date(), })
    res.redirect("/")
})

module.exports = { newMessageRouter }