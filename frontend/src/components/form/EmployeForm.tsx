import { CardContent, Card } from "@mui/material";
import { Control, FieldErrorsImpl } from "react-hook-form";
import GenderSelectBox from "./SelectField";
import ActionButton from "../buttons/ButtonAction";
import { FormEventHandler } from "react";
import { Employe } from "../../components/form/EmployeTypes";
import InputField from './InputField';





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
  );
};

export default EmployeForm;
