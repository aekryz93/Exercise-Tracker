const query = require('./models/query.js');

exports.addUser = (req, res) => {
  const username = req.body.username;
  const verifyUser = query.findUser(username, (err, data) => {
    if(err) return res.send('error occured');
    if(data) {
      query.createUser(username, (err, data) => {
        res.json({username: data.username, _id: data._id})
      })
    } 
    else if(!data) {
      res.send('user already token')
    } 
  })
}

exports.addExercise = (req, res) => {
  const userId = req.body.userId;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = req.body.date;
  
  query.findById(userId, (err, userData) => {
    if(userData) {
      query.createExercise(userId, description, duration, date ,(err, data) => {
        res.json({
          username: userData.username, 
          description: description,
          duration: duration,
          _id: userId,
          date: date,
        })
      })
    } else {
      res.send('unknown _id')
    }
  })
}