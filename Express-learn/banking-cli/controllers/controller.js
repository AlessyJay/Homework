const { INET } = require("sequelize/types");
const { Customer, Branch } = require("../models");

exports.getAllCustomer = async (req, res, next) => {
  try {
    const readCusts = await Customer.findAll(
      {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        order: ["firstName", "lastName"],
      }
    );
    res.status(200).json({ List: readCusts });
  } catch (err) {
    next(err);
  }
};

exports.getCustomerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readCustID = await Customer.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
        where: {
          id: id,
        },
      },
    });
    res.status(200).json({ List: readCustID });
  } catch (err) {
    next(err);
  }
};

exports.postNewCustomer = async (req, res, next) => {
  try {
    console.log(Customer);
    const { firstName, lastName, birthDate, gender, address } = req.body;
    const custs = await Customer.create({
      firstName,
      lastName,
      gender,
      birthDate,
      address,
    });
    res.status(200).json({ customer: custs });
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, birthDate, address, gender } = req.body;

    const updateCust = await Customer.update(
      {
        firstName,
        lastName,
        birthDate,
        address,
        gender,
      },
      { where: { id: id } }
    );
    if ((updateCust[0] = 0))
      return (
        res
          .status(400)
          .json({ message: `No rows affected with this action!` }) ||
        res.status(200).json({ message: "Successfully updated." })
      );
    res.status(200).json({ mesasage: "Successfully updated" });
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Customer.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Successfully deleted." });
  } catch (err) {
    next(err);
  }
};

// Branch

exports.getAllBranch = async (req, res, next) => {
  try {
    const readBranch = await Branch.findAll();
    res.status(200).json({ List: readBranch });
  } catch (err) {
    next(err);
  }
};

exports.getBranchId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const readBranchId = await Branch.findOne({
      where: { id: id },
    });
    res.status(200).json({ List: readBranchId });
  } catch (err) {
    next(err);
  }
};

exports.postBranch = async (req, res, next) => {
  try {
    const { name } = req.body;
    const postNewBranch = await Branch.create({
      name,
    });
    res.status(200).json({ branch: postNewBranch });
  } catch (err) {
    next(err);
  }
};

exports.updateBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateBranchById = await Branch.update(
      {
        name,
      },
      { where: { id: { id } } }
    );
    if ((updateBranchById = 0))
      return (
        res.status(400).json({ message: "Cannot update this row" }) ||
        res.status(200).json({ message: "Successfully updated" })
      );
    res.status(200).json({ message: updateBranchById });
  } catch (err) {
    next(err);
  }
};

exports.deleteBranch = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Branch.destroy({
      where: { id: id },
    });
    res.status(200).json({ message: "Successfully deleted." });
  } catch (err) {
    next(err);
  }
};
