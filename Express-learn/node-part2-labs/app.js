const path = require("path");
const express = require("express");
const router = express.Router;
const app = express();
const cors = require("cors");
const axios = require(`axios`);

// Lab 1
// app.get(`/`, (req, res) => {
//   res.send(`<h2>My First Web App using Express</h2>`);
// });

// app.get(`/`, (req, res) => {
//   res.send({ title: `My First Web App`, messaage: "Our Web App API" });
// });

// Lab 2
// app.get(`/todos`, (req, res) => {
//   res.send({ message: `Get todos` });
// });

// app.post(`/todos`, (req, res) => {
//   res.send({ messaage: `Put todos` });
// });

// app.put(`/todos`, (req, res) => {
//   res.send({ message: `Put todos` });
// });

// app.patch(`/todos`, (req, res) => {
//   res.send({ message: `Patch todos` });
// });

// app.delete(`/todos`, (req, res) => {
//   res.send({ message: `Delete todos` });
// });

// Lab 3
// app.get(`/redirect`, (req, res) => {
//   res.redirect(`https://www.google.com/`);
// });

// Lab 4
// app.get(`/404`, (req, res) => {
//   res.status(404).send(`<h1>This page is not found</h1>`);
// });

// Lab 5
// app.get(`/`, (req, res) => {
//   res.send(`<h1>Welcome To My Website</h1>`);
// });

// app.get(`/home`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/index.html`));
// });

// Lab 6
// app.get(`/`, (req, res) => {
//   res.send(`<h1>Welcome To My Website</h1>`);
// });

// app.get(`/home`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/index.html`));
// });

// app.use(`/`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/notFound.html`));
// });

// Lab 7
// app.get(`/`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/home.html`));
// });

// app.get(`/register`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/register.html`));
// });
// app.get(`/login`, (req, res) => {
//   res.sendFile(path.join(__dirname, `./pages/home.html`));
// });

// app.post(`/submit-login`, (req, res) => {
//   res.redirect(path.resolve(__filename));
// });

// app.post(`/submit-register`, (req, res) => {
//   res.redirect(path.resolve(__filename));
// });

// app.use((req, res, next) => {
//   console.log(req.user);
//   req.user = { id: 1, email: `example@gmail.com` };
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.user);
// });

// Lab 1 Middleware
// app.use(express.json());
// app.use(cors());

// Lab 2
// app.get((req, res, next) => {
//   res.send({ message: `path not found on this server` });
// });

// app.get(`/about`, (req, res, next) => {
//   res.send({ message: `path not found on this server` });
// });

// app.use((req, res, next) => {
//   res.status(404).send(`Sorry, path was not found!`);
// });

// Lab 3
// app.get("/todos", (req, res, next) => {
//   res.send({ message: `GET todos` });
// });

// const router = express.Router();
// router.get(`/`, (req, res, next) => {
//   res.send({ message: `GET method` });
// });
// router.post(`/`, (req, res, next) => {
//   res.send({ message: `POST method` });
// });
// router.put(`/`, (req, res, next) => {
//   res.send({ message: `PUT method` });
// });
// router.delete(`/`, (req, res, next) => {
//   res.send({ message: `DELETE method` });
// });

// app.use("/todos", router);

// Lab 4
app.get(`/dog`, (req, res, next) => {
  const getDog = async () => {
    try {
      const result = await axios(`https://dog.ceo/api/breeds/image/random`, {
        method: `GET`,
      });
      res.send({ pic: result.data.message });
    } catch (err) {
      console.log(err);
    }
  };
  getDog();
});

app.listen(8000, () => {
  console.log(`This server is running on port 8000`);
});
