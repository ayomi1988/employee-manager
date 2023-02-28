import Button from "@mui/material/Button";
import {CommonB} from './ButtonTypes'  
  

  
  export default function ButtonPrimary ({ onClick, id }: CommonB)  {
  return (
    <Button onClick={() => onClick(id)} sx={{ backgroundColor:'blue', margint: 3 }} />
  )
};
