const path = require('path');
const express = require('express');

var app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,'../public')));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../public/index.html'));
});

app.listen(port,() => {
  console.log(`App successfully started on port ${port}`);
});
