const express = require('express');
const router = express.Router();
const Todo_model=require('../models/todo');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, async(req, res) =>{
  const user=await Todo_model.find({email_:req.user.email});
    res.render('index',{todo:user,userinfo:req.user})
})

module.exports = router;
