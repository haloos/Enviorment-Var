const app = require('http') 
  .createServer((req,res) => res.sendDate('oh hi there!')); 

app.listen(3000, () => {
  
})