const withAuth = (req, res, next) => {
    // If the user isn't logged in, redirect them to the home page
    if (!req.session.logged_in) {
      res.redirect('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  