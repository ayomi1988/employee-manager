import express from 'express';

const router = express.Router();

import { createEmployee , deleteEmployee , getAllEmploye  , getEmpById , updateEmployee } from '../controller/employe.controller';

router.post('/',createEmployee);
router.get('/',getAllEmploye);
router.get('/:empId',getEmpById);
router.put('/:empId',updateEmployee);
router.delete('/:empId',deleteEmployee);

export default router;