import { Route, Routes, Navigate } from 'react-router-dom';
import EmployeAction from './pages/EmployeAdd';
import EmoData from './pages/EmpDataManager';
import MainLayout from './theme/MainLayout';
import PageNotfound from './pages/PageNotfound';

const RouteList = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Navigate replace to="/employees/list" />}></Route>
                <Route path="/employees/list" element={<EmoData/>}></Route>
                <Route path="/employees/add" element={<EmployeAction/>}></Route>
                <Route path="/employees/edit/:id" element={<EmployeAction/>}></Route>
                <Route path='*' element={<PageNotfound/>}></Route>                
            </Route>
        </Routes>
    );
};

export default RouteList;