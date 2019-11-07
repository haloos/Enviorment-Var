const app = require('http') 
  .createServer((req,res) => res.sendDate('oh hi there!')); 

const DATABASE_URL = PROCESS.ENV.DATABASE_URL
app.listen(PORT, () => {
  console.log(`Server is listening on port ${DATABASE_URL}`); 
});  

console.log(PORT);