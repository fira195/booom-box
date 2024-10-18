import express from "express";

const route=express.Router()

route.get('/create-room', (req,res, next)=>{
    res.send('create room')
})
export default route