var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Ex-gitaction-node project' })
})
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);