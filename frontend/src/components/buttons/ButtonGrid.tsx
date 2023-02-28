import Button from "@mui/material/Button";
import AppsIcon from '@mui/icons-material/Apps';
import {CommonB} from './ButtonTypes'  

  
  export default function ButtonGrid ({ onClick, id }: CommonB)  {
  return (
    <Button variant="contained" onClick={() => onClick(id)} startIcon={<AppsIcon htmlColor="white" sx={{marginLeft: 2}}  />}/>
  )
};
