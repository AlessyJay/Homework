const { readFile, writeFile } = require("fs/promises");

class Todo {
  constructor(list, status) {
    this.list = list;
    this.status = status;
  }

  static findAll = async () => {
    const data = await readFile(`dbs/todo.json`, `utf8`);
    const arrJSON = JSON.parse(data);
    return arrJSON;
  };

  static create = async () => {
    const data = await readFile(`dbs/todolist.json`, `utf8`);
  };

  //   save() {
  //     if (this.id) {
  //       //update
  //       const update = async () => {
  //         const readData = await readFile(`/dbs/todo.json`, `utf8`);
  //         const arrJSON = JSON.parse(readData);
  //         const index = arrJSON.findIndex((item) => item.id === this.id);
  //         arr[index] = this;
  //         await writeFile(`dbs/todo.json`, JSON.stringify(arrJSON));
  //       };
  //       update();
  //     } else {
  //       // create
  //       const create = async () => {
  //         const readData = await readFile(`dbs/todo.json`, `utf8`);
  //         const arrJSON = JSON.parse(readData);
  //         arrJSON.push({ id: ID() });
  //       };
  //     }
}

module.exports = Todo;
