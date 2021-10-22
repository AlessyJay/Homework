const db = require(`../db/connection`);

// exports.getLists = async (req, res, next) => {
//   try {
//     const result = await db.execute(`select * from list`);
//     res.send({ todo: result });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.postLists = async (req, res, next) => {
//   try {
//     const { title, completed, due_date } = req.params;
//     const post = await db.execute(
//       `insert into list (title, completed, due_date) value (?, ?, ?)`,
//       [title, completed, due_date]
//     );
//     res.status(200).send({ id: post.sendId, title, completed, due_date });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.updateList = async (req, res, next) => {
//   try {
//     const { id, title, completed, due_date } = req.params;
//     // const {  } = req.body;
//     const update = await db.execute(
//       `update list set title = ?, completed = ?, due_date = ? where id = ?`,
//       [title, completed, due_date, id]
//     );
//     if (update.affectedRows === 0) {
//       res.status(500).send({ message: "Bad request!" });
//     }
//     return res.status(200).send({ id, title, completed, due_date });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteList = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const del = await db.execute(`delete from list where id = (?)`, [id]);
//     if (del.affectedRows === 0) {
//       res.status(400).json({ message: "cannot delete this id" });
//     }
//     return res.status(204).json({ message: "success!" });
//   } catch (err) {
//     next(err);
//   }
// };

exports.getTransactions = async (req, res, next) => {
  try {
    const read = await db.execute("select * from transactions");
    res.status(200).json({ transactions: read });
  } catch (err) {
    next(err);
  }
};

exports.postTransactions = async (req, res, next) => {
  try {
    const { payee, amount, date, comment, categoryID } = req.params;
    const post = await db.execute(
      "insert into transactions (payee, amount, date , comment , categoryID) values payee = ?, amount = ?, date = ?, comment = ?, categoryID = ?",
      [payee, amount, date, comment, categoryID]
    );
    if (post.affectedRows === 0) {
      res.status(400).json({ message: "Unable to post transaction" });
    }
    return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};
