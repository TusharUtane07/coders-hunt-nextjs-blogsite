import * as fs from 'fs'

export default function handler(req, res){
    fs.readdir("blog-data", (err, data)=>{
        res.status(200).json(data)
    })
}