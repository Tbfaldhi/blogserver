const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      User = require('./usermodel')


var BlogSchema = new mongoose.Schema({ 
  title: String,
  content: String,
  },
  {
    timestamps: true
  });

  var Blog = mongoose.model('blog', BlogSchema);

module.exports = { Blog }