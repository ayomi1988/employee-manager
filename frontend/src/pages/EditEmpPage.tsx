import ValidationSchema from "../Validation/EmployeSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {AlertMessage} from '../components/atoms/Alerts';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { useAppDispatch } from "../store/useDispatch";
import { useSelector } from "react-redux";
import EditEmpForm from "../components/organisms/EditForm";
import { fetchEmployeById, createEmploye, updateEmploye } from "../store/EmpSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export type Employe = {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

export type EmployeList = {
  data: string[];
  loading:boolean;
  message:string;
  error?:string;
  singleRecord: Employe;
}

export type StateValue = {
  employee: EmployeList
}

const EditFormPage = () => {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { singleRecord } = useSelector(
    (state: StateValue) => state.employee || {}
  );

  //validate
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    //setError,
  } = useForm<Employe>({
    resolver: yupResolver(ValidationSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      gender: "",
    },
  });

//get details
  useEffect(() => {

    console.log({id});
    if (id) {
      dispatch(fetchEmployeById(id))
        .then(unwrapResult)
        .then((data) => {

if (singleRecord) {

  const { first_name, last_name, email, number, gender, photo } = data;
  const dataa = {
    first_name,
    last_name,
    email,
    number,
    gender,
    photo,
  };
  reset(dataa);
}
        })
        .catch((obj) => {
          AlertMessage('Something Went Wrong','error');
        });

  
    }
  }, [dispatch, id, reset]);

  const onSubmit = async (data: Employe) => {
    if (id) {
      await dispatch(updateEmploye({ ...data, _id: id }));
      reset();
      navigate("/employees/list");
      AlertMessage('updated Successfully','success');
    } 
  };

  return (
    <Grid container spacing={2}>
        
      <Container sx={{marginTop: '60px'}}> 
        <EditEmpForm
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          control={control}
          formData={false}
          id={id}
        />
      </Container>     
    </Grid>
  );
};

export default EditFormPage;
