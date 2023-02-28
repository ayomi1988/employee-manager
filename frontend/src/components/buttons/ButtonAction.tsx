import { Button } from "@mui/material";
import {ActionB} from './ButtonTypes'  


export default function ActionButton ({ formData, id }: ActionB) {
  return <div className="form-control">
    <Button fullWidth variant="contained" type="submit" disabled={formData}>
        {id ? 'Update' : 'Submit'}
    </Button>
  </div>;
};
