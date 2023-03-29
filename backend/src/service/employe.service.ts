import { Employees } from "../model/model";
import { log } from "../logs/logger";
import { Employe } from "../interface/interface";

/**
 * Delete itesm from DB by id
 * @param string id
 */
const deleteEmploye = async (id: string) => {
  try {
    const deletedEmploye = await Employees.deleteOne({ _id: id });
    if (deletedEmploye.deletedCount == 0) {
      throw new Error("Could not find");
    }
  } catch (e) {
    log.info(e);
  }
};

/**
 * Return all items from DB
 * @returns
 */
const getAllEmployee = async () => {
  try {
    console.log("xxx");
    return await Employees.find();
  } catch (e) {
    log.info(e);
  }
};

/**
 * Get item from DB by ID
 * @param string id
 * @returns
 */
const getEmployeByID = async (id: string) => {
  try {
    const singleEmploye = await Employees.findById(id).exec();
    if (!singleEmploye) {
      throw Error;
    }
    const { _id, first_name, last_name, email, number, gender, photo } =
      singleEmploye;
    return {
      id: _id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    };
  } catch (e) {
    log.info(e);
  }
};

/**
 * Create item in DB
 * @param object value
 * @returns
 */
const createEmploye = async (value: Employe) => {
  const { first_name, last_name, email, number, gender, photo } = value;

  try {
    const newEmploye = new Employees({
      first_name: first_name,
      last_name: last_name,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    });

    return await newEmploye.save();
  } catch (e) {
    log.info(e);
  }
};

/**
 * Update a entry in DB by ID
 * @param string value
 * @param id
 */
const updateEmployeData = async (value: Employe, id: string) => {
  const { first_name, last_name, email, number, gender, photo } = value;
  try {

    Employees.findByIdAndUpdate(
      id,
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        number: number,
        gender: gender,
        photo: photo,
      },
      function (err, docs) {
        if (err) {
          throw err;
        } else {
          console.log("Updated User : ", docs);
        }
      }
    );







  } catch (e) {
    log.info(e);
  }
};

export {
  deleteEmploye,
  getAllEmployee,
  getEmployeByID,
  createEmploye,
  updateEmployeData,
};
