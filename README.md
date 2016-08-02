# [path-to-regexp](https://github.com/pillarjs/path-to-regexp) loader for Webpack

### How to Install

```bash
npm install path-to-regexp-loader --save-dev
```

### How to Use

Given a `routes.json` file that may look like this:

```json
[
  { "path": "/tasks", "component": "TodoList" },
  { "path": "/tasks/:id(\\d+)", "component": "TodoItem" }
]
```

You can parse it by using `path-to-regexp-loader`:

```js
var routes = require('!!path-to-regexp-loader!./routes.json');
// => returns routes.json content as JSON parsed object
```

```js
[
  {
    path: '/tasks',
    pattern: /^\/tasks(?:\/(?=$))?$/i,
    keys: [],
    component: 'TodoList'
  },
  {
    path: '/tasks/:id(\\d+)',
    pattern: /^\/tasks\/((?:\d+))(?:\/(?=$))?$/i,
    keys: [
      {
        name: 'id',
        prefix: '/',
        delimiter: '/',
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: '\\d+'
      }
    ],
    component: 'TodoItem'
  }
]
```

### Related Projects

* [React App SDK](https://github.com/kriasoft/react-app)
* [React Static Boilerplate](https://github.com/kriasoft/react-app-boilerplate)

### License

[MIT](LICENSE.txt) © 2016-present Konstantin Tarkus ([@koistya](https://twitter.com/koistya))
