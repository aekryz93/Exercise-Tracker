const User = require('./User.js');
const Exercise = require('./Exercise.js');

exports.createUser = (user, done) => {
  const newUser = new User({username: user});
  newUser.save((err, data) => {
    if (err) return done(err);
    return done(null, data);
  })
}

exports.findUser = (user, done) => {
  User.findOne({username:user}, (err, usr) => {
    if(err) return done(err)
    else if(!usr) {
      return done(null, true);
    } 
    else if(usr) {
      return done(null, false)
    } 
  })
}

exports.createExercise = (user, dsc, duration, date, done) => {
  
  const newExercise = new Exercise({userId: user._id, description: dsc, duration: duration, date: date});
  newExercise.save((err, data) => {
    if (err) return done(err);
    return done(null, data);
  })
}

exports.findById = (userId, done) => {
  User.findById(userId, '_id username', (err, user) => {
    if(err) return done(true)
    else if(user) {
      return done(null, user);
    } 
    else if(!user) {
      return done(null, false)
    } 
  })
}