const jwt = require('jsonwebtoken')
const { Blog } = require('../model/blogmodel')
const  { User }  = require('../model/usermodel')
const mongoose = require('mongoose')
const pwd = process.env.SECRETCODE

module.exports = {

        addblog:function(req,res){
            console.log(req.body);
    
            let blog = new Blog({
                title: req.body.title,
                content:req.body.content,
            })

        blog
            .save((err,result) => {
                if(!err){
                    res.status(201).json({
                        message: 'Blog successed add',
                        data: result
                    })

                } else {
                    res.status(500).json({
                    message: 'something went wrong'
                    })
                }
            })
            
        
    },

        getlist:function (req,res) {
                Blog.
                    find({})                       
                    .then(response => {
                        res.status(200).json({
                          response
                        })
                      })
                      .catch(err => {
                        console.log(err);
                      })
                    
    },
    
        

        deleteBlog: function(req,res){
          
        console.log('-------',req.params);
        
        Blog.findByIdAndRemove(req.params.id, (err, blog) => {  
            if (err) return res.status(500).send(err);
            const response = {
                message: "blog successfully deleted",
            };
            return res.status(200).send(response);
        });      
      },
        search:function (req,res) { 
               console.log('=====',req.body);
               Blog
               .find({status:req.body.status})   
               .exec(function(err,blog){
                   if(!err){
                       res.send(blog)
                   }else{
                    res.status(500).send(err)
                   }
               })
        }

}