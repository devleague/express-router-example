#Express Router Examples

This is a basic demo of what Express router objects can do.

It demonstrates using routes in a modular way without having to pass an instance of an express `app` into a route file.

Before
```
var routes = require('./routes');
routes(app);
```

After
```
var routes = require('./routes');
app.use('/', routes);
```

Try testing the following requests:

- GET [localhost:3000](http://localhost:3000)
- POST [localhost:3000](http://localhost:3000)
- GET [localhost:3000/user](http://localhost:3000/user)
- GET [localhost:3000/user/1](http://localhost:3000/user/1)

Be sure to check both the console and browser window when sending requests.

For more information, refer to the docs: http://expressjs.com/api.html#router
