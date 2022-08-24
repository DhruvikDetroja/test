import express from 'express'
import {connectDB} from './db/connectdb.js'
import path from 'path'
const DATABASE_URL='mongodb+srv://dhruvik:GdsH8EXHWF1z34Xf@cluster0.vxbpcd4.mongodb.net/school?retryWrites=true&w=majority'
connectDB(DATABASE_URL)
const app=express()
app.use('/student',express.static(path.join(process.cwd(),"public")))
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(3000,()=>{
    console.log("Listening to port 3000")
})