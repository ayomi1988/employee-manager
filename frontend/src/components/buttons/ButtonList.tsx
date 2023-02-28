import Button from "@mui/material/Button";
import ViewListIcon from '@mui/icons-material/ViewList';
import {CommonB} from './ButtonTypes'  
  
  
  export default function ButtonList ({ onClick, id }: CommonB)  {
  return (
    <Button variant="contained" onClick={() => onClick(id)} startIcon={<ViewListIcon htmlColor="white" sx={{marginLeft: 2}} />}  />
  )
};
