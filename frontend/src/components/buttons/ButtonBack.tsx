import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {RedirectB} from './ButtonTypes'  


export default function ButtonBack ({name,redirectPath}:RedirectB)  {
    const navigate = useNavigate();

    return (
        <Button variant="contained" onClick={()=>{navigate(redirectPath);}} startIcon={<ArrowBackIcon htmlColor="white" />}>
       {name}
        </Button>
    );
};




