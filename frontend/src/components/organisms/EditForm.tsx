import { CardContent, Card, Grid, Toolbar, Container } from "@mui/material";
import { Control, FieldErrorsImpl } from "react-hook-form";
import { FormEventHandler } from "react";
import InputField from '../molecules/InputField';
import GenderSelectBox from '../molecules/SelectField';
import {ActionButton, ButtonBack} from "../atoms/Button";



type Employe = {
    _id?: string;
    first_name: string;
    last_name: string;
    email: string;
    number: string;
    gender: string;
    photo: string;
  }

type FormSubmitDataProps = {
  id?: string;
  formData: boolean;
  errors: Partial<FieldErrorsImpl<Employe>>;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;  
  control: Control<Employe> | undefined; 
  
};

const EditEmpForm = ({
  handleSubmit,
  formData,
  id,
  errors,
  control,
  
}: FormSubmitDataProps) => {
  return (
    <Grid container spacing={2}>
    <Toolbar sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
    <ButtonBack
      name={"Go Back"}
      redirectPath={"/employees/list"}
    />
  </Toolbar>  
  <Container sx={{marginTop: '60px'}}> 
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <InputField
            label={"First Name"}
            titleName={"first_name"}
            control={control}
            error={errors?.first_name?.message}            
          />
          <InputField
            label={"Last Name"}
            titleName={"last_name"}
            control={control}
            error={errors?.last_name?.message}           
          />
          <InputField
            label={"Email"}
            titleName={"email"}
            control={control}
            error={errors?.email?.message}            
          />
          <InputField
            label={"Phone Number"}
            titleName={"number"}
            control={control}
            error={errors?.number?.message}            
          />
          <InputField
            label={"Photo"}
            titleName={"photo"}
            control={control}
            error={errors?.photo?.message}           
          />
          <GenderSelectBox control={control} error={errors?.gender?.message} />
          <ActionButton formData={formData} id={id}/>
        </CardContent>
      </Card>
    </form>
       </Container>     
       </Grid>
  );
};

export default EditEmpForm;
