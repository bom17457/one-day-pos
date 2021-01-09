export default ({ app, urlPath, redirect }) => {
  return new Promise((resolve, reject) => {
    app.firebase.auth().onAuthStateChanged(function(user) {
      if (!user && (urlPath != '/')) {
        redirect({name: '/signin'})
        reject()
      } else if (user && (urlPath == '/')) {
        redirect({name: 'dashboard'})
        reject()
      } else {
        resolve()
      }
    });
  });
};
