const app = require('http') 
  .createServer((req,res) => res.sendDate('oh hi there!')); 

const PORT = process.env.PORT
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`); 
});  

console.log(process.env);