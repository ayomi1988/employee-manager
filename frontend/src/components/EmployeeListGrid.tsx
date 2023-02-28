import { Grid, Typography, CardContent, CardActions, Card,  CardMedia } from "@mui/material";
import { EmpListType } from "../components/form/EmployeTypes";
import { Employe } from "../components/form/EmployeTypes";
import ButtonDelete from "../components/buttons/ButtonDelete";
import ButtonEdit from "../components/buttons/ButtonEdit";



const EmployeeListGrid = ({
  employee,
  deleteEmploye,
  redirectToEdit,
}: EmpListType) => {
  return employee.map((employe: Employe, index: number) => (
    

<Grid item md={3} key={index}>
  <Card>
  <CardMedia width="300" component="img" alt="title" image={employe.photo} />
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  {employe.first_name} {employe.last_name}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {employe.email}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {employe.number}
  </Typography>
  <Typography variant="body2" color="text.secondary">
  {employe.gender === "M" ? "Male" : "Female"}
  </Typography>
</CardContent>
<CardActions>
<ButtonDelete onClick={deleteEmploye} id={employe._id} />
<ButtonEdit onClick={redirectToEdit} id={employe._id} />
</CardActions>
</Card>
</Grid>


  ));
};

export default EmployeeListGrid;
