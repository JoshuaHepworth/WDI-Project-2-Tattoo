const express = require('express');
const router  = express.Router();
const Client    = require('../models/clients');
const Artist = require('../models/artists')
const bcrypt  = require('bcrypt');
const jquery = require('jquery')


router.get('/login', (req, res) => {
  // ON EVERY SINGLE ROUTE IN THE WHOLE ENTIRE APPLICATION
  // you have attached to req a new property called session
  Client.findOne({username: req.session.username}, (err, foundClient) => {
    Artist.findOne({username: req.session.username}, (err, foundArtist) => {

      res.render('auth/login.ejs', {
        message: req.session.message,
        username: req.session.username,
        session: req.session.logged,
        client: foundClient,
        artistId: foundArtist
      });
    });
  })

})

/**/
router.post('/register', async (req, res, next) => {
  try {

    // get and encrypt pasword
    const password = req.body.password;
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    console.log(passwordHash)

    // make sure there is no client or artist with desired username
    const foundClient = await Client.findOne({
      username: req.body.username
    });
    const foundArtist = await Artist.findOne({
        username: req.body.username
    });


    // if either one of those exists, 
      // "username taken"
      // session stuff
      // redirect

    // else { // username not taken

        if (req.body.userType === 'artist') {
            // create artist db object
            const artistEntry = {};
            artistEntry.username = req.body.username;
            artistEntry.password = passwordHash;
            artistEntry.name = req.body.name
            artistEntry.city = req.body.city
            artistEntry.yearsExp = req.body.yearsExp

            const artist = await Artist.create(artistEntry);
            // console.log(artist);
        }

        else { // "req.body.userType" === 'client'
          // create client db objectclient
          const clientEntry = {};
          clientEntry.username = req.body.username;
          clientEntry.password = passwordHash;
          clientEntry.name = req.body.username

          const user = await Client.create(clientEntry);
        }

        // always set session
        req.session.username = req.body.username;
        req.session.logged = true;
        req.session.message = '';

        // always redirect
        res.redirect('/artists');

    // } // end username not taken

  } 
  catch (e) {
    next(e);
  }

});

router.post('/login', async (req, res) => {
  //first query the database to see if the user exists
  try {   
          const foundArtist = await Artist.findOne({username: req.body.username});
          const foundClient = await Client.findOne({username: req.body.username});
          console.log(foundClient)
          console.log(foundArtist)

          if(foundClient){
          // if the users exists use the bcrypt compare password
          //to make sure the passwords match
            if(bcrypt.compareSync(req.body.password, foundClient.password)){
              req.session.logged = true;
              req.session.username = req.body.username;
              req.session.password = req.body.password;
              res.redirect('/artists')

            } else {

              req.session.message = 'Username or Password is Wrong';
              res.redirect('/auth/login')
            }

 
        } else if (foundArtist){
          // if the users exists use the bcrypt compare password
          //to make sure the passwords match
            if(bcrypt.compareSync(req.body.password, foundArtist.password)){
              req.session.logged = true;
              req.session.username = req.body.username;
              req.session.password = req.body.password;
              
              res.redirect('/artists')

            } else {

              req.session.message = 'Username or Password is Wrong';
              res.redirect('/auth/login')
            }

 
        } else {
              req.session.message = 'Username or Password is Wrong';
              res.redirect('/auth/login')
        };//end of first session check

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

