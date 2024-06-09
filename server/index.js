const express = require('express')
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/user")
var connectionUrl = "mongodb://localhost:27017/BlockchainBasedOnlineVoting"
mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err
    console.log("Connected")
})

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/home", (req, res) => {
    res.render("index")
})

app.post("/api/user", (req, res) => {
    const SaveUser = new UserModel(req.body)
    SaveUser.save((error, savedUser) => {
        if (error) throw error
        res.json(savedUser)
    })
})

app.listen(9000, () => {
    console.log("listening to port 9000")
})

const UserController = {
    async login(req, res) {
      try {
        const { aadhar } = req.body;
        const aadharNum = await User.findOne({ aadhar });

        const isAadharValid = await bcrypt.compare(aadharNum, user.aadhar);
        if (isAadharValid) {
          res.status(200).json({ message: 'Authentication successful' });
        } else {
          res.status(401).json({ message: 'Authentication failed' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    },
  };