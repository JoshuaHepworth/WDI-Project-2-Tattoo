const express = require('express');
const router  = express.Router();
const Client    = require('../models/clients');
const bcrypt  = require('bcrypt');
const jquery = require('jquery')


router.get('/login', (req, res) => {

  // ON EVERY SINGLE ROUTE IN THE WHOLE ENTIRE APPLICATION
  // you have attached to req a new property called session
  res.render('auth/login.ejs', {
    message: req.session.message,
    username: req.session.username,
    session: req.session.logged
  });
});

router.post('/register', async (req, res) => {

  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(passwordHash)


  const userEntry = {};
  userEntry.username = req.body.username;
  userEntry.password = passwordHash;
  userEntry.name = req.body.username

  const user = await Client.create(userEntry);
  console.log(user);
  // initializing the session here
  // req.session.username = req.body.username;
  req.session.logged   = true;
  req.session.message  = '';
  try {
          const foundClient = await Client.findOne({username: req.body.username});
          console.log(foundClient)

          if(foundClient){
          // if the users exists use the bcrypt compare password
          //to make sure the passwords match
            if(bcrypt.compareSync(req.body.password, foundClient.password)){
              req.session.logged = true;
              req.session.username = req.body.username;
              req.session.password = req.body.password;
              
              // ../partials/nav.ejs
              // store username in session
              // and/or user id
              }
            }
          } catch (err) {
            res.send(err)
          }
  res.redirect('/artists');
});


router.post('/login', async (req, res) => {
  //first query the database to see if the user exists
  try {
          const foundClient = await Client.findOne({username: req.body.username});
          console.log(foundClient)

          if(foundClient){
          // if the users exists use the bcrypt compare password
          //to make sure the passwords match
            if(bcrypt.compareSync(req.body.password, foundClient.password)){
              req.session.logged = true;
              req.session.username = req.body.username;
              req.session.password = req.body.password;
              
              // ../partials/nav.ejs
              // store username in session
              // and/or user id

              res.redirect('/artists')

            } else {

              req.session.message = 'Username or Password is Wrong';
              res.redirect('/auth/login')
            }


        } else {
              req.session.message = 'Username or Password is Wrong';
              res.redirect('/auth/login')
        } // end of foundUser


  } catch(err) {
    res.send('error')
  }




});




router.get('/logout', (req, res) => {
  // this basically restarts the session
  // and clears out all the properties that we set
  // on the session object
  req.session.destroy((err) => {
    if(err){
      res.send(err);
    } else {
      res.redirect('/auth/login')
    }
  });
});




module.exports = router;