const todo = require(`../model/todoModel`);

exports.getIndex = async (req, res, next) => {
  //   res.sendFile(path.join(__dirname, `../pages/index.html`));
  const Todo = await todo.findAll();
  console.log(Todo);
  res.render("index", { name: "John Doe", Todo });
};

exports.createPage = (req, res) => {
  res.render(`/create-todo`);
};

exports.createTodo = async(req, res) => {
    const body = req.body;
    await todo.create
}