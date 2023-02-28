import { Request, Response } from "express";
import {
  deleteEmploye,
  createEmploye,
  getEmployeByID,
  getAllEmployee,
  updateEmployeData,
} from "../service/employe.service";
import {
  itemValidation,
  itemSchemaValidation,
  itemUpdateSchemaValidation,
} from "../validation/validationSchema";
import { log } from "../logs/logger";

/**
 * Delete Employee By ID
 * @param req
 * @param res
 * @returns
 */
const deleteEmployee = async (req: Request, res: Response) => {
  const id = req.params.empId;
  try {
    await deleteEmploye(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

/**
 * Get all employees
 * @param req
 * @param res
 * @returns
 */
const getAllEmploye = async (req: Request, res: any) => {
  const { error } = itemValidation.validate(res.body);
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await getAllEmployee();
    res.status(200).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

/**
 * Employee By ID
 * @param req
 * @param res
 * @returns
 */
const getEmpById = async (req: Request, res: any) => {
  try {
    const data = await getEmployeByID(req.params.empId);
    res.status(200).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

/**
 * Create new Employee
 * @param req
 * @param res
 * @returns
 */
const createEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemSchemaValidation.validate(req.body);
  console.log(error);
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    const data = await createEmploye(value);
    res.status(201).json(data);
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

/**
 * Update employee by ID
 * @param req
 * @param res
 * @returns
 */
const updateEmployee = async (req: Request, res: Response) => {
  const { error, value } = itemUpdateSchemaValidation.validate(req.body);
  const id = req.params.empId;
  if (error) {
    return res.json(400).json({ error: error });
  }
  try {
    await updateEmployeData(value, id);
    res.status(200).json({ message: "Updated Successfully" });
  } catch (e) {
    log.info(e);
    return res.json(400).json({ status: "error", error: e });
  }
};

export {
  deleteEmployee,
  getAllEmploye,
  getEmpById,
  createEmployee,
  updateEmployee,
};
