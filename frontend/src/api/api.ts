export const BASE_URL = "http://localhost:3001/";

export const EMPLOYE_GETALL_API = '/api/employees';
export const EMPLOYE_GET_SINGLE_API = (empId:string = '') => `/api/employees/${empId}`;
export const EMPLOYE_POST_API = `/api/employees`;
export const EMPLOYE_UPDATE_API = (empId:string = '') => `/api/employees/${empId}`;
export const EMPLOYE_DELETE_API = (empId:string = '') => `/api/employees/${empId}`;