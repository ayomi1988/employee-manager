import axios,{ AxiosError } from "axios";
import {
  BASE_URL,
  EMPLOYE_DELETE_API,
  EMPLOYE_GETALL_API,
  EMPLOYE_GET_SINGLE_API,
  EMPLOYE_POST_API,
  EMPLOYE_UPDATE_API,
} from "../api/api";


type Employe = {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

const employeApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllEmployeeAPI = async () => {
  try {
    const response = await employeApi.get(EMPLOYE_GETALL_API);
    return response.data.data;
  } catch (error: any) {
    console.error(error);
    let err = error as AxiosError;
    throw err;
  }
};

export const postEmployeAPI = async (employe: Employe) => {
  try {
    return await employeApi.post(EMPLOYE_POST_API, employe);
  } catch (error: any) {
    console.error(error);
    let err = error as AxiosError;
    throw err;
  }
};

export const getEmployeByIdAPI = async (empId: string) => {
  try {
    const response = await employeApi.get(EMPLOYE_GET_SINGLE_API(empId));
    return response.data.data;
  } catch (error: any) {
    console.error(error);
    let err = error as AxiosError;
    throw err;
  }
};

export const deleteEmployeByIdAPI = async (empId: string) => {
  return await employeApi.delete(EMPLOYE_DELETE_API(empId));
};

export const updateEmployeeAPI = async (employee: Employe) => {
  try {
    return await employeApi.put(EMPLOYE_UPDATE_API(employee._id), employee);
  } catch (error: any) {
    console.error(error);
    let err = error as AxiosError;
    throw err;
  }
};

export default employeApi;
