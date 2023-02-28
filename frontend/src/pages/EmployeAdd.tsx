import ValidationSchema from "../Validation/EmployeSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {AlertMessage} from '../components/Alerts/Alerts';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Grid, Toolbar } from "@mui/material";
import { useAppDispatch } from "../store/useDispatch";
import { useSelector } from "react-redux";
import { Employe, StateValue } from "../components/form/EmployeTypes";
import EmployeForm from "../components/form/EmployeForm";
import ButtonBack from "../components/buttons/ButtonBack";
import { fetchEmployeById, createEmploye, updateEmploye } from "../store/EmpSlice";
import { unwrapResult } from "@reduxjs/toolkit";


const EmployeAction = () => {
  
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
    setError,
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
    if (id) {
      dispatch(fetchEmployeById(id))
        .then(unwrapResult)
        .then((data) => {})
        .catch((obj) => {
          AlertMessage('Something Went Wrong','error');
        });

      if (singleRecord) {
        const { first_name, last_name, email, number, gender, photo } =
          singleRecord;
        const data = {
          first_name,
          last_name,
          email,
          number,
          gender,
          photo,
        };
        reset(data);
      }
    }
  }, [dispatch, id, reset]);

  const onSubmit = async (data: Employe) => {
    if (id) {
      await dispatch(updateEmploye({ ...data, _id: id }));
    } else {
      await dispatch(createEmploye(data));
      reset();
      navigate("/employees/list");
      AlertMessage('Employee Data Added Successfully','success');
    }
  };

  return (
    <Grid container spacing={2}>
      <Toolbar sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
        <ButtonBack
          name={"Go Back"}
          redirectPath={"/employees/list"}
        />
      </Toolbar>    
      <Container sx={{marginTop: '60px'}}> 
        <EmployeForm
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

export default EmployeAction;
