import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from 'dotenv'
import mongoose from "mongoose"



dotenv.config()
const app = express()
app.use(express.json())



const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(PORT,()=> console.log(`Server running on PORT ${PORT}`))
})
.catch((error)=> console.log(`${error} didn't connect.`))
