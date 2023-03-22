import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let data = await fs.promises.readdir('Contact-data')
      console.log(data)
      fs.promises.writeFile(`Contact-data/${data.length+1}.json`, JSON.stringify(req.body))
      res.status(200).json(req)
    } else {
      // Handle any other HTTP method
      res.status(200).json(["This is to accept the data from contact page using POST request."])
    }
  }