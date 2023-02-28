import React, { useRef, useEffect, useState, ReactElement } from "react";
import { Grid, Stack, Button } from "@mui/material";
import ButtonList from "../components/buttons/ButtonList";
import ButtonGrid from "../components/buttons/ButtonGrid";
import EmployeeListGrid from "../components/EmployeeListGrid";
import EmployeeListTable from "../components/EmployeListTable";
import { confirmAlert } from "react-confirm-alert";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/useDispatch";
import { fetchEmployee, deleteEmploye } from "../store/EmpSlice";
import { StateValue } from "../components/form/EmployeTypes";
import Loader from "../components/loader/Loader";
import "react-confirm-alert/src/react-confirm-alert.css";
import { unwrapResult } from "@reduxjs/toolkit";
import { debounce } from "lodash";
import { useNavigate, Link } from "react-router-dom";
import {AlertMessage} from '../components/Alerts/Alerts';


export default function EmpData() {
  const dispatch = useAppDispatch();
  const [isView, setIsView] = useState(true);
  const navigate = useNavigate();


 //get Employe list

  const getEmployeeLists = useRef(
    debounce(() => {
      dispatch(fetchEmployee())
        .unwrap()
        .then((data) => {})
        .catch((obj) => {
          AlertMessage('Something went wrong','error');
        });
    }, 600)
  ).current;

  useEffect(() => {
    getEmployeeLists();
  }, [getEmployeeLists]);

  const { data, loading } = useSelector(
    (state: StateValue) => state.employee || {}
  );


// delete employe data by id

  const deleteHandler = (id: string) => {
    confirmAlert({
      title: "Are you sure? ",
      message: "Click Delete to confirm",
      buttons: [
        {
          label: "Delete",
          onClick: () => deleteAction(id),
        },
        {
          label: "Cancel",
          onClick: () => {},
        },
      ],
    });
  };

  const deleteAction = (id: string) => {
    dispatch(deleteEmploye(id))
      .then(unwrapResult)
      .then((data: any) => {
        dispatch(fetchEmployee());
        AlertMessage('Successfully deleted !','success');
      })
      .catch((obj: { message: any }) => {
        console.log(obj.message);
        AlertMessage('Error on delete !','error');
      });
  };

 
// redirect to list page into edit page
 
  const redirectToEdit = (id: string) => {
    navigate(`/employees/edit/${id}`);
  };


 // changing grid to list and list to grid action

 
  const ChangingView = () => {
    setIsView(!isView);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
     
      {data.length === 0 ? (
        <Loader />
      ) : isView ? (
        <>
       <Stack width="100%" direction="row" justifyContent="end" alignItems="end" spacing={2}>    
        
        <Button component={Link} to="/employees/add" variant="contained">Add Employee</Button>
        
        <ButtonList onClick={ChangingView}/>        
      </Stack>
      <EmployeeListGrid
          employee={data}
          deleteEmploye={deleteHandler}
          redirectToEdit={redirectToEdit}
        ></EmployeeListGrid>
        </>
       
      ) : (
        <>
        <Stack width="100%" direction="row" justifyContent="end" alignItems="end" spacing={2}>
        <Button component={Link} to="/employees/add" variant="contained">Add Employee</Button>
        <ButtonGrid onClick={ChangingView}/>        
      </Stack>
          <EmployeeListTable
          employee={data}
          deleteEmploye={deleteHandler}
          redirectToEdit={redirectToEdit}
        ></EmployeeListTable>
        </>
      
      )}
    </Grid>
  );
};


