import { Grid, Typography, CardContent, CardActions, Card,  CardMedia } from "@mui/material";
import { DeleteButton, ButtonEdit } from "../atoms/Button"; 


export type EmpListType = {
    employe: any;
    deleteEmploye:Function,
    redirectToEdit :Function,
  }

const EmployeeListGrid = ({
  employe,
  deleteEmploye,
  redirectToEdit,
}: EmpListType) => {
  return employe.map((employe: any, index: number) => (
    

<Grid item md={3} key={index} data-cy="grid-item">
  <Card>
  <CardMedia data-cy="emp-dp" width="300" component="img" alt="title" image={employe.photo} />
<CardContent>
  <Typography data-cy="emp-name" gutterBottom variant="h5" component="div">
  {employe.first_name} {employe.last_name}
  </Typography>
  <Typography data-cy="emp-email" variant="body2" color="text.secondary">
  {employe.email}
  </Typography>
  <Typography data-cy="emp-number" variant="body2" color="text.secondary">
  {employe.number}
  </Typography>
  <Typography data-cy="emp-gender" variant="body2" color="text.secondary">
  {employe.gender === "M" ? "Male" : "Female"}
  </Typography>
</CardContent>
<CardActions>
<DeleteButton onClick={deleteEmploye} id={employe._id} />
<ButtonEdit onClick={redirectToEdit} id={employe._id} />
</CardActions>
</Card>
</Grid>


  ));
};

export default EmployeeListGrid;
