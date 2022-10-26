import express from 'express';
import path from 'path'
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('dist'));

app.get('/post',(req,res)=>
{
    res.json('hmm')
})


if(process.env.NODE_ENV!=='production')
{
    app.get('*',(req,res)=>
    {
        req.sendFile(path.resolve('dist','index.html'))
    })
}

app.listen(3001,()=>
{
    console.log('5000 port')
})