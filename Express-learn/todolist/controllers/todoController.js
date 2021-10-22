const { readFile, writeFile } = require("fs/promises");
const { v4: ID } = require("uuid");

exports.getAllTodo = async (req, res) => {
  try {
    const { list, status } = req.params;
    const read = await readFile(`public/todolist.json`, `utf8`);
    const parse = JSON.parse(read);
    const findName = parse.filter(
      (item) =>
        (list === undefined ||
          item.list.toLowerCase().includes(list.toLowerCase())) &&
        (status === undefined ||
          !["true", "false"].includes(status.toLowerCase()) ||
          `` + item.status === status)
    );
    res.status(200).send({ todo: findName });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: `Error, something went wrong!` });
  }
};
exports.getTodo = async (req, res, next) => {
  try {
    const read = await readFile(`public/todolist.json`, `utf8`);
    const parse = JSON.parse(read);
    const { id } = req.params;
    const todo = parse.find((item) => item.id === id);

    if (!todo) {
      return res.status(200).send({ todo: null });
    }
    res.status(200).send({ todo });
    // res.status(200).send({ todo: todo ?? null });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { list, status, date } = req.body;
    if (list !== undefined || typeof list.trim() !== `string`) {
      const getTime = new Date().toLocaleTimeString();
      const getYear = new Date().toLocaleDateString();
      const read = await readFile(`public/todolist.json`, `utf8`);
      const parse = JSON.parse(read);
      const findIdx = parse.findIndex((item) => item.id === id);

      if (findIdx === -1) {
        return res
          .status(400)
          .send({ message: `cannot find the ID that you're looking for!` });
      }
      parse[findIdx] = { id, list, status, date: getYear, time: getTime };
      await writeFile(`public/todolist.json`, JSON.stringify(parse));
      res.status(200).send({ todo: parse[findIdx] });
    } else {
      res.status(400).send({ message: `Updating error!` });
    }
  } catch (err) {
    next(err);
  }
};
exports.createTodo = async (req, res) => {
  try {
    const { list, status } = req.body;
    if (list !== undefined || typeof list.trim() !== `string`) {
      const getData = await readFile(`public/todolist.json`, `utf8`);
      const getTime = new Date().toLocaleTimeString();
      const getYear = new Date().toLocaleDateString();
      const arrJSON = JSON.parse(getData);
      arrJSON.push({
        id: ID(),
        list: list,
        status: status,
        time: getTime,
        date: getYear,
      });
      await writeFile(`public/todolist.json`, JSON.stringify(arrJSON));
      res.json({ message: `Success!` });
    } else {
      res.status(500).json({ message: `Something went wrong!` });
    }
  } catch (err) {
    res.status(500).json({ message: `Bad gateway` });
  }
};

exports.checkExistTodoID = async (req, res, next) => {
  const { id } = req.params;
  const read = await readFile(`public/todolist.json`, `utf8`);
  const parse = JSON.parse(read);
  const findIdx = parse.findIndex((item) => item.id === id);

  if (findIdx === -1) {
    return res.status(400).send({
      message: `Error, sorry cannot find the ID that you're looking for.`,
    });
  }
  next();
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const read = await readFile(`public/todolist.json`, `utf8`);
    const parse = JSON.parse(read);
    const findIdx = parse.findIndex((item) => item.id === id);

    if (findIdx === -1) {
      return res.status(400).json({
        message: `Error, cannot find the ID that you're looking for!`,
      });
    }
    parse.splice(findIdx, 1);
    await writeFile(`public/todolist.json`, JSON.stringify(parse));
    res.status(200).send({ message: `Success!` });
  } catch (err) {
    next(err);
  }
};
