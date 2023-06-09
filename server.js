const express = require('express');
const app = express();

app.use(express.static(__dirname))
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(port=80);
console.log('Running at Port 3000');