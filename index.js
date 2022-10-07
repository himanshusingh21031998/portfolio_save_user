const cors = require('cors')
const express = require('express');
const User = require('./model/user');
const { mongoConnect } = require('./mongo_config')

const app = express()


app.use(cors())

app.use(express.json());

app.post('/save_user_data', async (req, res)=> {
    const data = req.body
    try {
        await User.create(data)
        res.json({status: 'success'})
    } catch (error) {
        res.json({status: 'fail', error: error.message})
    }
})

app.get('/', async (req, res) => {
    res.json({status: 'success'})
})

app.listen(5000, () => {
    console.log("app listening at port 5000");
})