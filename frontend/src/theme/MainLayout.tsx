import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from "../components/header/index";
import { Container } from "@mui/material";

export default function MainLayout () {
    return ( 
         <>
            <ToastContainer style={{ width: "90%" }}  />
            <Header/>
            <Container sx={{marginTop: '60px'}}> <Outlet/> </Container>
        </>
      
    );
};
