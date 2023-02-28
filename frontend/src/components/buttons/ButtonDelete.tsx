import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import {CommonB} from './ButtonTypes'  

  
  export default function DeleteButton ({ onClick, id }: CommonB)  {
  return (
    <Button variant="contained" onClick={() => onClick(id)} startIcon={<DeleteIcon htmlColor="white" sx={{marginLeft: 2}} />}/>
  )
};
