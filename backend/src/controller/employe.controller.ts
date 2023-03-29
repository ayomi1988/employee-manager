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
import {
  successApiResponse,
  errorsApiResponse,
} from "../helpers/response_handler";

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
    successApiResponse(res, "", "Deleted Successfully", 200);
  } catch (e) {
    log.info(e);
    errorsApiResponse(res, e);
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
    successApiResponse(res, data, null, 200);
  } catch (e) {
    log.info(e);
    errorsApiResponse(res, e);
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
    successApiResponse(res, data, null, 200);
  } catch (e) {
    log.info(e);
    errorsApiResponse(res, e);
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
    errorsApiResponse(res, error.details, "Validation failed.", 409);
  }
  try {
    const data = await createEmploye(value);
    successApiResponse(res, data, null, 201);
  } catch (e) {
    log.info(e);
    errorsApiResponse(res, e);
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
    errorsApiResponse(res, error.details, "Validation failed.", 409);
  }
  try {
    await updateEmployeData(value, id);
    successApiResponse(res, "", "Updated Successfully", 200);
  } catch (e) {
    log.info(e);
    errorsApiResponse(res, e);
  }
};

export {
  deleteEmployee,
  getAllEmploye,
  getEmpById,
  createEmployee,
  updateEmployee,
};
