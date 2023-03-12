import { Route, Routes, Navigate } from 'react-router-dom';
import EmployeAction from './pages/AddEmpPage';
import EmpData from './pages/Dashboard';
import MainLayout from './components/templates/default';
import PageNotfound from './pages/PageNotfound';
import EditAction from './pages/EditEmpPage';

const RouteList = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Navigate replace to="/employees/list" />}></Route>
                <Route path="/employees/list" element={<EmpData/>}></Route>
                <Route path="/employees/add" element={<EmployeAction/>}></Route>
                <Route path="/employees/edit/:id" element={<EditAction/>}></Route>
                <Route path='*' element={<PageNotfound/>}></Route>                
            </Route>
        </Routes>
    );
};

export default RouteList;