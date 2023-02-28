import Button from "@mui/material/Button";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {CommonB} from './ButtonTypes'  


  export default function ButtonEdit ({ onClick, id }: CommonB)  {
  return (
    <Button variant="contained" onClick={() => onClick(id)} startIcon={<HowToRegIcon htmlColor="white" sx={{marginLeft: 2}} />} />
  )
};

