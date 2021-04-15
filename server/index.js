const app = require("express")()
const cors = require('cors')

const apidata = [
    {
        id: 1,
        name: "vinicius"
    },
    {
        id: 2,
        name: "bruno"
    }
]

app.use(cors())

app.get('/getalldata', (req, res) => {
    res.json({
        message: "Okay",
        data: apidata
    })
})

app.listen(3333, ()=>{
    console.log("Server okay!");
})