const path = require("path");
const express = require("express");
const app = express();

// app.use((req, res) => {
//     res.send(`<h1>Port is ruuning!</h1>`)
// })

// app.get(`/about`, (req, res) => {
//     res.send(`<h1>This will get something!</h1>`)
// })

// app.post(`/create-something!`, () => {
//     res.send(`This is method post: path: /create-something!`)
// })

// app.post(`/`, (req, res) => {
//     res.send(`This is post`)
// })

// app.delete(`/`, (req, res) => {
//     res.status(200).send(({method: `Delete`, title: 'This is delete method!'}))
// })

// console.log(path.resolve(`./`));
// console.log(path.join(path.resolve(`./`), ('/pages/index.html')));
// console.log(__dirname)
// console.log(__filename)

// app.get(`/`, (req, res) => {
//     res.sendFile(path.join(path.resolve(__dirname), `/pages/index.html`));
// })

// app.get(`/login`, (req, res) => {
//     res.sendFile(path.join(path.resolve(__dirname), `/pages/login.html`));
// })

// app.post(`/post-login`, (req, res) => {
//     res.sendFile(path.join(__dirname, `/pages/login.html`))
// })

// app.use(express.static(`public`)); //http://localhost:8000/pictures/detail1.jpeg
// // app.use(`public`, express.static(`public`)); //http://localhost:8000/public/pictures/detail1.jpeg

// app.get(`/`, (req, res, next) => {
//   res.sendFile(path.join(__dirname, `/pages/index.html`));
// });

// app.use((req, res, next) => {
//   res.json(`Hello!`);
// });

// app.use(`/static`, express.static(`public`));

// app.get(
//   express.json(`/`, (req, res, next) => {
//     res.sendFile(path.join(__dirname), `pages/index.html`);
//   })
// );

// query
// app.get(`/`, (req, res, next) => {
//   const query = req.query;
//   console.log(query);
// });

// Lab 1
// app.get(`/sum`, (req, res, next) => {
// Lab 1.1
//   const { a, b } = req.query;
//   res.json({ sum: +a + +b });
//   Lab 1.2
//   const query = req.query;
//   const sum = Object.values(query).reduce((acc, item) => acc + +item, 0);
//   res.json({ sum });
//   Lab 1.3
//   const { arr } = req.query;
//   const sum = JSON.parse(arr).reduce((acc, item) => acc + +item, 0);
//   res.json(sum);
// });

// Lab 5.2
// app.get(`sum/:a/:b`, (req, res, next) => {
//   const value = req.params;
//   res.send(value.a, value.b);
// });

// app.post(`/sum/:id`, (req, res, next) => {
//   const ID = req.params;
//   res.send(ID);
// });

// app.get(`/users/:id/bookings/:bookingID`, (req, res, next) => {
//   const value = req.params;
//   res.json(value);
// });

app.use(express.urlencoded({ extended: false })); // Content type urlencoded only!
// app.use(express.json()); // Content type apllication/json only

// Content-type multipart/form-data use external middleware such as busboy, formidable,

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `/pages/login.html`));
});

// app.post(`/post-login`, (req, res) => {
//   const body = req.body;
//   console.log(body);
//   console.log(body.email);
//   console.log(body.password);
// });

app.get(`/users/:id/:email`, (req, res) => {
  const { id, email } = req.params;
});

app.post(`/login`, (req, res) => {
  const { email, password } = req.params;
});

app.put(
  `products/:id/name/:name/price/:price/description/:description`,
  (req, res) => {
    const { name, price, description } = req.params;
  }
);

app.delete(`product/:id`, (req, res) => {
  const id = req.params;
});

app.listen(8000, () => {
  console.log(`This server is running on port 8000`);
});
