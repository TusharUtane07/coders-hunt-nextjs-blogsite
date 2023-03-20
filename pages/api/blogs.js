import * as fs from 'fs'

export default async function handler(req, res){
    
        let data = await fs.promises.readdir("blog-data")
        let myFile;
        let allBlogs = []
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            myFile = await fs.promises.readFile(('blog-data/' + item), 'utf-8')
            // console.log(item)
            // console.log(myFile)
            allBlogs.push(JSON.parse(myFile))
            
        }
        res.status(200).json(allBlogs)
    
    // fs.readdir("blog-data", (err, data)=>{
    //     console.log(data)
    //     data.forEach((item)=>{
    //         console.log(item)
    //     })
    //     res.status(200).json(data)
    // })
}