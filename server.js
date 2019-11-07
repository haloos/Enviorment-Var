const app = require('http') 
  .createServer((req,res) => res.sendDate('oh hi there!')); 

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`); 
});