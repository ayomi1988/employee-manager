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

const EmployeForm = ({
  handleSubmit,
  formData,
  id,
  errors,
  control,
  
}: FormSubmitDataProps) => {
  return (
    <Grid item container spacing={2} data-cy="form">
    <Toolbar sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
    <ButtonBack
      name={"Go Back"}
      redirectPath={"/employees/list"}
    />
  </Toolbar>  
  <Container sx={{marginTop: '60px'}}> 
    <form onSubmit={handleSubmit}  id="submitemp">
      <Card>
        <CardContent data-cy="card-container">
          <InputField data-test="empf-name"
            label={"First Name"}
            titleName={"first_name"}
            control={control}
            error={errors?.first_name?.message}            
          />
          <InputField data-testid="empf-namel"
            label={"Last Name"}
            titleName={"last_name"}
            control={control}
            error={errors?.last_name?.message}           
          />
          <InputField data-testid="empf-email"
            label={"Email"}
            titleName={"email"}
            control={control}
            error={errors?.email?.message}            
          />
          <InputField data-testid="empf-number"
            label={"Phone Number"}
            titleName={"number"}
            control={control}
            error={errors?.number?.message}            
          />
          <InputField data-testid="empf-dp"
            label={"Photo"}
            titleName={"photo"}
            control={control}
            error={errors?.photo?.message}           
          />
          <GenderSelectBox data-testid="empf-gender" control={control} error={errors?.gender?.message} />
          <ActionButton formData={formData} id={id}/>
        </CardContent>
      </Card>
    </form>
       </Container>     
       </Grid>
  );
};

export default EmployeForm;
