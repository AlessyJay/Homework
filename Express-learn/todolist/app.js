const express = require("express");
const path = require("path");
const app = express();
const { v4: ID } = require("uuid");
const { readFile, writeFile } = require("fs/promises");

app.use(express.json());

app.get(`/`, async (req, res) => {
  res.sendFile(path.join(__dirname, "public/todolist.json"));
  try {
  } catch (err) {
    res.status(400).send({ message: `Cannot reload the file` });
  }
});

app.post(`/post-submit`, async (req, res) => {
  try {
    const { list, status, date } = req.body;
    if (typeof list === `undefined` || list === ``.trim() || list === NaN) {
      res.status(400).json({ message: `Bad request` });
    } else if (typeof status !== `undefined` && status !== `boolean`) {
      res.status(400).json({ message: `Bad request!` });
    } else {
      const newTodos = {
        id: ID(),
        list: list,
        status:
          typeof status === `boolean` ? status === false : status === true,
        date: isNaN(new Date(date).getTime()) ? null : date,
      };

      const result = await readFile(`public/todolist.json`, `utf8`);
      const arrTodo = JSON.parse(result);
      arrTodo.push(newTodos);

      await writeFile(`public/todolist.json`, JSON.stringify(arrTodo));

      res.status(201).json({ message: `Success!` });
    }
  } catch (err) {
    res.status(500).json({ error: `Bad request :(` });
  }
});

app.delete(`/delete/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await readFile(`public/todolist.json`, `utf8`);
    const arrResult = JSON.parse(result);

    const index = arrResult.findIndex((item) => item.id === id);
    if (index !== -1) {
      arrResult.splice(index, 1);
      await writeFile(`public/todolist.json`, JSON.stringify(arrResult));
      res.status(204).json(`Delete success!`);
    } else {
      res.status(400).json({ message: `Something went wrong!` });
    }
  } catch (err) {
    res.status(500).json({ message: `Deleting error!` });
  }
});

app.put(`/edit`, async (req, res) => {
  try {
    const { id } = req.query;
    const { list, status, date } = req.body;
    if (typeof list == `undefined` || list === ``.trim() || list === NaN) {
      res.status(400).json({ message: `Request denied!` });
    } else if (typeof status !== `undefined` && typeof status !== `boolean`) {
      res.status(400).json({ message: `Request denied!` });
    } else {
      const result = await readFile(`public/todolist.json`, `utf8`);
      const arrTodos = JSON.parse(result);
      const index = arrTodos.findIndex((item) => item.id === id);
      if (index !== -1) {
        arrTodos[index] = {
          id: id,
          list: list,
          status: status || false,
          date: isNaN(new Date(date).getTime()) ? null : date,
        };
        await writeFile(`public/todolist.json`, JSON.stringify(arrTodos));
        res.status(200).send(`Success updating!`);
      } else {
        res.status(400).send({ message: `cannot find ID` });
      }
    }
  } catch (err) {
    res.status(500).json({ message: `Editing is in bad request` });
    console.log(err);
  }
});

app.listen(8000, () => {
  console.log(`This server is running on port 8000`);
});
