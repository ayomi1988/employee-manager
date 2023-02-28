import {Container, Grid, TableHead, TableRow, TableContainer, Table, TableBody, Paper, TableCell, tableCellClasses} from "@mui/material";
import { styled } from '@mui/material/styles';
import { EmpListType } from "../components/form/EmployeTypes";
import ButtonDelete from "../components/buttons/ButtonDelete";
import ButtonEdit from "../components/buttons/ButtonEdit";
import { Employe } from "../components/form/EmployeTypes";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const EmployeeListTable = ({
  employee,
  deleteEmploye,
  redirectToEdit,
}: EmpListType) => {
  return (
    <Container sx={{marginTop: '60px'}}> 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employee.map((employe: Employe, index: number) => (
            <TableRow key={index}>
              <TableCell sx={{ border: 1 }} align="left">
                <img src={employe.photo} alt="employee" width="100px"></img>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.first_name + "" + employe.last_name}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.email}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.number}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                {employe.gender === "M" ? "Male" : "Female"}
              </TableCell>
              <TableCell sx={{ border: 1 }} align="center">
              <Grid container>
                  <Grid md={6}><ButtonDelete onClick={deleteEmploye} id={employe._id} /></Grid>
                  <Grid md={6}><ButtonEdit onClick={redirectToEdit} id={employe._id} /></Grid>                 
                
              </Grid>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    
  );
};

export default EmployeeListTable;
