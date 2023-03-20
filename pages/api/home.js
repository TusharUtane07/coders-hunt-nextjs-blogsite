import * as fs from 'fs';

export default function handler (req, res){
  fs.readFile(`blog-data/${req.query.slug}.json`, 'utf-8', (err, data)=>{
    if(err){
      res.status(500).json({error: "No such Blog Found in the Server!!"})
    }
    // This how you can create api and add many more functionalities to it.
    // Endpoint is ready for usage.
    // http://localhost:3000/api/home?slug=learn-react-native
    res.status(200).json(JSON.parse(data))
    // console.log(data)
  })
}  