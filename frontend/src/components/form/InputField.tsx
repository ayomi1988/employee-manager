import { Grid, InputLabel, FilledInput, FormHelperText } from '@mui/material';
import { Controller,Control } from 'react-hook-form';
import { Employe } from '../../components/form/EmployeTypes';

type InputViewProps = {
    label:string;
    control:Control<Employe> | undefined;
    error?:string;
    titleName: any;
};

const InputField = ({label,control,error,titleName}: InputViewProps) => {
    return (
        
        <Grid container>
            <Grid md={4}><InputLabel required htmlFor={`${label}-id`} id={`${label}-id`}>{label}</InputLabel></Grid>
            <Grid md={8}>
                <Controller
                control={control}
                name={titleName}
                render={({field})=>(
                        <FilledInput
                        id={label}
                        placeholder={label}                    
                        {...field}
                        error={Boolean(error)}
                        autoComplete='off'                    
                        fullWidth
                        />
                    )}
                />
                <FormHelperText color='red'>{error}</FormHelperText>
            </Grid>
        </Grid>
            
            
        
    );
};

export default InputField;